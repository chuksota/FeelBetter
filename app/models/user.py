from .db import db
from .saved import SavedArts
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)

  feeds = db.relationship("Feed", back_populates="user")
  articles = db.relationship("Article", secondary=SavedArts, back_populates='user')
  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "feeds": [feed.to_dict() for feed in self.feeds],
      "articles": [article.to_dict() for article in self.articles]
      # "followed_sources": [source.to_dict() for source in feed.sources for feed in self.feeds]
    }
