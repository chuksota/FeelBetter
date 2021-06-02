from .db import db

class Article(db.Model):
  __tablename__ = "articles"

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String)
  image_url = db.Column(db.String)
  description = db.Column(db.String(5000))
  sources_id = db.Column(db.Integer, db.ForeignKey("sources.id"))
  website_link = db.Column(db.String)
  date_posted = db.Column(db.Date)

  sources = db.relationship("Source", back_populates="articles")

  def to_dict(self):
    return{
      "id": self.id,
      "title": self.title,
      "image_url": self.image_url,
      "description": self.description,
      "sources_id": self.sources_id,
      "website_link": self.website_link,
      "date_posted": self.date_posted,
      "sources":self.sources
    }
