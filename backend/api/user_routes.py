from flask import Blueprint, jsonify, request
from backend.models import User,db
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from datetime import datetime, timedelta
from io import StringIO
import os
import json
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    jwt_refresh_token_required, create_refresh_token,
    get_jwt_identity, set_access_cookies,
    set_refresh_cookies, unset_jwt_cookies
)


user_routes = Blueprint('users', __name__)

@user_routes.route('/')
def index():
  response = User.query.all()
  return { "users": [user.to_dict() for user in response]}

@user_routes.route('/', methods=['POST'])
def sign_up():
    username = request.json.get('username', None)
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    if not username or not password or not email:
        return jsonify({'login': False}), 401

    hashed_pass = generate_password_hash(password, method='sha256')
    default_skill = json.dumps({'learning':0})

    new_user = User(username=username, email=email, hashed_password=hashed_pass, user_skills=default_skill, focus='', theme='galaxy')
    db.session.add(new_user)
    db.session.commit()
    # Create the tokens we will be sending back to the user
    access_token = create_access_token(identity=username)
    refresh_token = create_refresh_token(identity=username)
    user = new_user.to_dict()
    print('---------------------------------------')
    print(user)
    # Set the JWT cookies in the response
    resp = jsonify({'login': True, **user})
    print('--------------------')
    print(resp)
    set_access_cookies(resp, access_token)
    set_refresh_cookies(resp, refresh_token)
    return resp, 200

@user_routes.route('/update/skills', methods=['PUT'])
def update_skills():
    data = request.json
    user = User.query.get(data['user']['id'])
    user.user_skills = json.dumps(data['user']['user_skill'])
    db.session.commit()
    return jsonify(user.to_dict())

# @user_routes.route('/delete/skills', methods=['DELETE'])
# def update_skills():
#     data = request.json
#     user = User.query.get(data['user']['id'])
#     user.user_skills = json.dumps(data['user']['user_skill'])
#     db.session.commit()
#     return jsonify(user.to_dict())

@user_routes.route('/update/focus', methods=['PUT'])
def update_focus():
    data = request.json
    user = User.query.get(data['user']['id'])
    user.focus = data['focus']
    db.session.commit()
    return jsonify(user.to_dict())
@user_routes.route('/update/theme', methods=['PUT'])
def update_theme():
    data = request.json
    print('---------------')
    print(data)
    user = User.query.get(data['user']['id'])
    user.theme = data['theme']
    db.session.commit()
    return jsonify(user.to_dict())
