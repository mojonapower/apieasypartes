from flask import Flask, jsonify
from json import dumps
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
cors= CORS(app, resources ={
    r'/*': {
        'origins': '*',
    }
})

@app.route('/users', methods=['GET'])
def user():
    return(jsonify({
        "user": "admin",
        'password': 'admin'}))

@app.route('/patente', methods=['GET'])
def patente():
    return(jsonify([
        {'patente':'HJRV74'},
        {'patente':'CYCL55'},
        {'patente':'CCCC00'}
        ]))




app.run(host='157.245.170.27'port=5000)