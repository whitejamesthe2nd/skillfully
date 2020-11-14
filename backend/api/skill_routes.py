from flask import Blueprint, jsonify, request
from backend.models import User, Skill, db
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from datetime import datetime, timedelta
import os
import json



skill_routes = Blueprint('skill', __name__)

@skill_routes.route('/')
def index():
  response = Skill.query.all()
  return { "skills": [skill.to_dict() for skill in response]}

@skill_routes.route('/create', methods=['POST'])
def create_skill():
  data = request.json
  print('-------------------------')
  print(data)
  errors = []
  skill = Skill(
  name = data['name'],
  skill_tip1= data['skill_tip1'],
  skill_tip2 = data['skill_tip2'],
  skill_tip3 = data['skill_tip3'],
  skill_resource1 = data['skill_resource1'],
  skill_resource2 = data['skill_resource2'],
  skill_resource3 = data['skill_resource3'],
  )
  if errors:
      return jsonify(errors)
  db.session.add(skill)
  db.session.commit()
  return jsonify(data)

@skill_routes.route('/delete', methods=['DELETE'])
def delete_bookmark():
    data = request.json
    skill = Skill.query.get(data['id'])
    db.session.delete(skill)
    db.session.commit()
    return "Deleted."
