from flask_mysqldb import MySQL
from decouple import config

from __main__ import app


class DBConnection:
    __mysql = None

    @staticmethod
    def getInstance():
        return DBConnection.__mysql

    def __init__(self):
        if DBConnection.__mysql is not None:
            """ Raise exception if init is called more than once. """
            raise Exception("This class is a singleton!")
        else:
            app.config['MYSQL_HOST'] = config('MYSQL_HOST')
            app.config['MYSQL_USER'] = config('MYSQL_USER')
            app.config['MYSQL_PASSWORD'] = config('MYSQL_PASSWORD')
            app.config['MYSQL_DB'] = config('MYSQL_DB')
            DBConnection.__mysql = MySQL(app)
