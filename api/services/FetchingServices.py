import os
from io import BytesIO
import threading
import pickle as pkl

import tensorflow as tf
from flask import Response
import numpy as np
import cv2

from api.utils.LoadModel import *
from api.utils.LoadHaarCascade import *
from api.utils.DBConnection import *
from api.utils.audio_manipulations import *


def confirmHVTidentity(file_bytes, response_result):
    mysql = DBConnection.getInstance()
    mycursor = mysql.connection.cursor()

    img = tf.io.decode_image(file_bytes).numpy()
    predictions = []

    pickle_in = None

    try:
        pickle_in = open('api/assets/criminal_hash', 'rb')
        criminal_record = pkl.load(pickle_in)
        copy_ind = None

        for _id, criminal in criminal_record.items():
            embeds = image_to_embeddings(img, criminal)
            predictions.append(embeds[0])
            copy_ind = embeds[1]

        predictions = np.sqrt(np.array(predictions))
        min_ind = np.argmin(predictions)
        print('doe upto here', predictions)
        if predictions[min_ind] < 1.09:
            mycursor.execute('SELECT * FROM criminals WHERE id = %s', (min_ind,))
            print(min_ind)
            results = mycursor.fetchone()

            cv2.rectangle(img, (copy_ind[0], copy_ind[1]), (copy_ind[0] + copy_ind[2], copy_ind[1] + copy_ind[3]),
                          (255, 0, 0), 5)

            font = cv2.FONT_HERSHEY_SIMPLEX

            cv2.putText(img, results[1], (copy_ind[0], copy_ind[1] - 6), font, 1, (0, 255, 0), 2, cv2.LINE_AA)

            cv2.imwrite('api/assets/box_img.png', img)

            response_result['data']['matched_criminal'] = results
            response_result['data']['matched_criminal_img_with_name'] = 'api/assets/box_img.png'
            response_result['status'] = 'success'

    except Exception as e:
        print(f'Exception: {e}')
        response_result['status'] = 'invalid'

    finally:
        if pickle_in is not None:
            pickle_in.close()


def adminAuth(img, respose_result):
    admin_img = tf.image.decode_jpeg(tf.io.read_file('admin/admin.jpg'))
    preds = image_to_embeddings(img.numpy(), admin_img.numpy())[0]
    print(preds)

    if preds < 0.9:
        respose_result['message'] = ['Authenticated']
    respose_result['status'] = 'success'


def content_upload(file, response_result):
    filename = f'api/assets/uploadedvid.{file.content_type.split("/")[-1]}'
    with open(filename, 'wb') as f:
        f.write(file.read())
        print('success')

    desnoise(filename)

    response_result['status'] = 'success'


def image_to_embeddings(img, db_img):
    ind = None
    img = cv2.cvtColor(img, cv2.COLOR_RGBA2GRAY)
    db_img = cv2.cvtColor(db_img, cv2.COLOR_RGBA2GRAY)

    haar = LoadHaarCascade.getInstance()

    model = LoadModel.getInstance()

    face, face1 = None, None

    try:
        faces_imgs = haar.detectMultiScale(img, 1.3, 5)

        for (x, y, w, h) in faces_imgs:
            face = tf.cast(cv2.resize(img[y:y + w, x:x + w], (160, 160)), tf.float32) / 255.0
            ind = (x, y, w, h)

            face = tf.expand_dims(face, -1)
            face = tf.expand_dims(face, 0)

        faces_db = haar.detectMultiScale(db_img, 1.3, 5)
        for (x, y, w, h) in faces_db:
            face1 = tf.cast(cv2.resize(db_img[y:y + w, x:x + w], (160, 160)), tf.float32) / 255.0

            face1 = tf.expand_dims(face1, -1)
            face1 = tf.expand_dims(face1, 0)

        face1 = tf.image.grayscale_to_rgb(face1)
        face = tf.image.grayscale_to_rgb(face)

        return model.predict([face, face1]), ind

    except NameError:
        print('Could Not Find any face in the image')


def gen(camera):
    capture = cv2.VideoCapture(camera)
    current_frame = 0
    while True:
        success, frame = capture.read()
        if success:
            frame_name = "api/assets/runtime/framevideo.jpg"
            # extracting frames from video
            cv2.imwrite(frame_name, frame)

            frame = open(frame_name, 'rb').read()
            yield b'--frame\r\n'b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n'


def video_feed():
    return Response(gen('api/assets/runtime/processedvid.mp4'),
                    mimetype='multipart/x-mixed-replace; boundary=frame')
