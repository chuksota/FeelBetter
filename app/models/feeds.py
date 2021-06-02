from .db import db

class Feed(db.Model):
  __tablename__ = 'feeds'
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(20))
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
  sources_id = db.Column(db.Integer, db.ForeignKey("sources.id"))


  def to_dict(self):
    return{
    "id": self.id,
    "name": self.name,
    "user_id": self.user_id,
    "sources_id": self.sources_id
    }
