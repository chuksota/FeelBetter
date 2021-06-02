from .db import db
from .sourcefeed import SourceFeed
class Feed(db.Model):
  __tablename__ = 'feeds'
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(20))
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

  sources = db.relationship("Source", secondary=SourceFeed, back_populates="feeds")
  user = db.relationship("User", back_populates="feeds")

  def to_dict(self):
    return{
    "id": self.id,
    "name": self.name,
    "user_id": self.user_id,
    "sources": [source.to_simple_dict() for source in self.sources]
    }
