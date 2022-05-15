from functools import wraps
from flask import request, jsonify
import json
import base64
import io
from PIL import Image
import matplotlib.pyplot as plt

from __main__ import app
from api.services.FetchingServices import *


@app.route('/fw/response_check', methods=['GET'])
def fw_response_check():
    response_result = {
        'status': 'not_allowed',
        'message': ['Not authenticated'],
        'data': {}}

    return json.dumps(response_result)


@app.route('/fw/confirmHVTidentity', methods=['POST', 'OPTIONS', 'GET'])
def fw_confirmHVTidentity():
    response_result = {
        'status': 'not_allowed',
        'message': ['Not authenticated'],
        'data': {}}

    file = request.files['file_from_react']
    filename = file.filename
    file_bytes = file.read()

    try:
        confirmHVTidentity(file_bytes, response_result)
    except Exception as e:
        print("Exception :", e)

    return json.dumps(response_result)


@app.route('/fw/adminAuth', methods=['POST'])
def fw_adminAuth():
    response_result = {
        'status': 'not_allowed',
        'message': ['Not authenticated'],
        'data': {}}

    form_data_name = request.form_data = request.get_json()
    stri = base64.b64decode(form_data_name['image'].split(',')[1].encode('ascii'))

    with open('l.jpg', 'wb') as f:
        f.write(stri)
        f.close()

    img = tf.image.decode_jpeg(tf.io.read_file('l.jpg'))

    try:
        adminAuth(img, response_result)

    except Exception as e:
        print("Exception :", e)

    return json.dumps(response_result)


@app.route('/fw/content_upload', methods=['POST'])
def fw_content_upload():
    response_result = {
        'status': 'not_allowed',
        'message': ['Not authenticated'],
        'data': {}}

    file = request.files['vid']

    try:
        content_upload(file, response_result)

    except Exception as e:
        print("Exception :", e)

    return json.dumps(response_result)


@app.route('/fw/video_feed', methods=['GET'])
def fw_video_feed():
    response_result = {
        'status': 'not_allowed',
        'message': ['Not authenticated'],
        'data': {}}

    try:
        return video_feed()

    except Exception as e:
        print("Exception :", e)
