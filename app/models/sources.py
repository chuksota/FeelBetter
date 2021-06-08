from .db import db
from .sourcefeed import SourceFeed

class Source(db.Model):
  __tablename__ = 'sources'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(300))
  url = db.Column(db.String(2000))

  feeds = db.relationship("Feed", secondary=SourceFeed, back_populates="sources")
  articles = db.relationship("Article", back_populates="sources")

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "feeds": self.feeds,
      "articles": self.articles
    }

  def to_simple_dict(self):
    return {
      "id": self.id,
      "name": self.name,
    }
