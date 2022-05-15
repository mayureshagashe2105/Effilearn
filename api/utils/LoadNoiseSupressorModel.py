import tensorflow as tf


class LoadNoiseSuppressorModel:
    __model = None

    @staticmethod
    def getInstance():
        return LoadNoiseSuppressorModel.__model

    def __init__(self):
        if LoadNoiseSuppressorModel.__model is not None:
            """ Raise exception if init is called more than once. """
            raise Exception("This class is a singleton!")
        else:
            LoadNoiseSuppressorModel.__model = tf.keras.models.load_model(
                'api/assets/models/auto_encoders_for_noise_removal_production.h5')




