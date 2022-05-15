from flask import Flask, request, abort
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
from api.fwapp import *
from api.utils.DBConnection import *
from api.utils.LoadModel import *
from api.utils.LoadHaarCascade import *
from api.utils.LoadNoiseSupressorModel import *

@app.before_request
def before_request():
    # return {"filters": "filters"}
    pass


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response


if __name__ == '__main__':
    mysql_connection = DBConnection()
    model_loading = LoadNoiseSuppressorModel()
    # model_loading2 = LoadModel()
    haar_cascade = LoadHaarCascade()

    print("Testing DB connection", mysql_connection)
    print("Testing model loading", model_loading)
    # print("Testing model loading", model_loading2)
    print("Testing Haarcascade clf loading", haar_cascade)

    # set_secretkey = Auth(mysql_connection.getInstance())
    # Production
    # app.run(host='0.0.0.0', debug=False, port=3000)
    # Development
    app.run(host='localhost', debug=True, port=5000)
