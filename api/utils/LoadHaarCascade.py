from __main__ import app

import cv2


class LoadHaarCascade:
    __haarcascade = None

    @staticmethod
    def getInstance():
        return LoadHaarCascade.__haarcascade

    def __init__(self):
        if LoadHaarCascade.__haarcascade is not None:
            """ Raise exception if init is called more than once. """
            raise Exception("This class is a singleton!")
        else:
            LoadHaarCascade.__haarcascade = cv2.CascadeClassifier(cv2.data.haarcascades +
                                                                  'haarcascade_frontalface_default.xml')

