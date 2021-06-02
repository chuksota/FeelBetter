from .db import db
from .sourcefeed import SourceFeed

class Source(db.Model):
  __tablename__ = 'sources'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(20))
  icon_url = db.Column(db.String)

  feeds = db.relationship("Feed", secondary=SourceFeed, back_populates="sources")
  articles = db.relationship("Article", back_populates="sources")

  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "icon_url": self.icon_url,
      "feeds": self.feeds,
      "articles": self.articles
    }

  def to_simple_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "icon_url": self.icon_url,
    }
