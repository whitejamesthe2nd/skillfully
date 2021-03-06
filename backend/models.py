from flask_sqlalchemy import SQLAlchemy
from io import StringIO
import json

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(100))
  user_skills = db.Column(db.Text)
  focus = db.Column(db.String(100))
  theme = db.Column(db.String(100))

  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "user_skill": json.load(StringIO(self.user_skills)),
      "focus": self.focus,
      "theme": self.theme
    }

class Skill(db.Model):
  __tablename__ = 'skills'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(100))
  skill_tip1 = db.Column(db.String(500))
  skill_tip2 = db.Column(db.String(500))
  skill_tip3 = db.Column(db.String(500))
  skill_resource1 = db.Column(db.String(100))
  skill_resource2 = db.Column(db.String(100))
  skill_resource3 = db.Column(db.String(100))

  def to_dict(self):
    return {
      'id': self.id,
      'name': self.name,
      'skill_tip1': self.skill_tip1,
      'skill_tip2': self.skill_tip2,
      'skill_tip3': self.skill_tip3,
      'skill_resource1': self.skill_resource1,
      'skill_resource2': self.skill_resource2,
      'skill_resource3': self.skill_resource3,
    }
