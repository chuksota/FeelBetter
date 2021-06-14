from .db import db
from .saved import SavedArts
class Article(db.Model):
  __tablename__ = "articles"

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String)
  summary = db.Column(db.String(5000))
  author = db.Column(db.String)
  sources_id = db.Column(db.Integer, db.ForeignKey("sources.id"))
  website_link = db.Column(db.String)
  published = db.Column(db.String)

  sources = db.relationship("Source", back_populates="articles")
  user = db.relationship('User', secondary=SavedArts, back_populates='articles')

  def to_dict(self):
    return{
      "id": self.id,
      "title": self.title,
      "author": self.author,
      "summary": self.summary,
      "sources_id": self.sources_id,
      "website_link": self.website_link,
      "published": self.published,
    }
