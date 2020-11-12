from flask import Blueprint, jsonify
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
