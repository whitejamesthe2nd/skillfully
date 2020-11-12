from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(100))
  user_skills = db.Column(db.String(5000))

  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "user_skills": self.skills
    }

  class Skill(db.Model):
    __tablename__ = 'skills'

    id = db.Column(db.Integer, primary_key = True)
    skill_name = db.Column(db.String(100))
    skill_description = db.Column(db.String(5000))
