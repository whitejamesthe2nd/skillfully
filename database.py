from dotenv import load_dotenv
load_dotenv()
from werkzeug.security import generate_password_hash
from flask import jsonify

from backend import app, db
from backend.models import User, Skill
import json

with app.app_context():
  db.drop_all()
  db.create_all()
  ianSkills = json.dumps({'Japanese': 1000, 'Javascript': 1000})
  # Users
  ian = User(username = 'Ian', email = 'ian@aa.io', hashed_password = generate_password_hash("password"), user_skills= ianSkills)
  javier = User(username = 'Javier', email = 'javier@aa.io')
  dean = User(username = 'Dean', email = 'dean@aa.io')
  angela = User(username = 'Angela', email = 'angela@aa.io')
  soonmi = User(username = 'Soon-Mi', email = 'soonmi@aa.io')
  alissa = User(username = 'Alissa', email = 'alissa@aa.io')

  # Skills
  japanese = Skill(
    name = 'Japanese',
    skill_tip1= '''Learn the Alphabets in order of Hiragana, Katakana, Kanji.
    When learning kanji remember start with the jouyou kanji. Try to learn
    20-30 words a week after you have learned the first two alphabets''',
    skill_tip2 = ''' For speaking japanese make sure to get down the
    hiragana by looking for examples of native speakers pronouncing them,
    then record yourself and listen to how you pronouce and compare. Use
    something along the lines of the second resource''',
    skill_tip3 = ''' For grammar just remember to practice often and use a textbook
     like the one provided in the first resource. Also long term learning remember
     to use spaced repition. In resource three an anki deck link has been provided ''',
    skill_resource1 = 'https://www.amazon.com/GENKI-Integrated-Elementary-Japanese-English/dp/4789014401',
    skill_resource2 = 'https://www.youtube.com/watch?v=6p9Il_j0zjc',
    skill_resource3 = 'https://ankiweb.net/shared/info/942922371'
    )




  #add users
  db.session.add(ian)
  db.session.add(javier)
  db.session.add(dean)
  db.session.add(angela)
  db.session.add(soonmi)
  db.session.add(alissa)
  # add events

  db.session.add(japanese)
  db.session.commit()
