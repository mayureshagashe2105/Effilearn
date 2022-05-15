import tensorflow as tf
from tensorflow.keras import layers
import numpy as np


class LoadModel:
    __model = None

    @staticmethod
    def getInstance():
        return LoadModel.__model

    def __init__(self):
        if LoadModel.__model is not None:
            """ Raise exception if init is called more than once. """
            raise Exception("This class is a singleton!")
        else:
            facenet = tf.keras.models.load_model('api/assets/models/facenet_0.131v.h5')

            input1 = tf.keras.Input((160, 160, 3))
            input2 = tf.keras.Input((160, 160, 3))

            encoded_l = facenet(input1)
            encoded_r = facenet(input2)

            norm_encoded_l = layers.Lambda(lambda tensor: tensor / tf.norm(tensor), 2)(encoded_l)
            norm_encoded_r = layers.Lambda(lambda tensor: tensor / tf.norm(tensor), 2)(encoded_r)

            subtracted_tensor = layers.Subtract()([norm_encoded_l, norm_encoded_r])
            abs_subtracted_tensor = layers.Lambda(lambda x: tf.norm(tf.abs(x)))(subtracted_tensor)

            SiameseNet = tf.keras.Model(inputs=[input1, input2], outputs=abs_subtracted_tensor,
                                        name='OneShot_face_recognition_SiameseNet')

            LoadModel.__model = SiameseNet




