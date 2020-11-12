from dotenv import load_dotenv
load_dotenv()
from werkzeug.security import generate_password_hash

from backend import app, db
from backend.models import User, Skill

with app.app_context():
  db.drop_all()
  db.create_all()

  ian = User(username = 'Ian', email = 'ian@aa.io', hashed_password = generate_password_hash("password"))
  javier = User(username = 'Javier', email = 'javier@aa.io')
  dean = User(username = 'Dean', email = 'dean@aa.io')
  angela = User(username = 'Angela', email = 'angela@aa.io')
  soonmi = User(username = 'Soon-Mi', email = 'soonmi@aa.io')
  alissa = User(username = 'Alissa', email = 'alissa@aa.io')

  db.session.add(ian)
  db.session.add(javier)
  db.session.add(dean)
  db.session.add(angela)
  db.session.add(soonmi)
  db.session.add(alissa)

  db.session.commit()
