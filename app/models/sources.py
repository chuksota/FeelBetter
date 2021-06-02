from .db import db


class Source(db.Model):
  __tablename__ = 'sources'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(20))
  icon_url = db.Column(db.String)


  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "icon_url": self.icon_url
    }
