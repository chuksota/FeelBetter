from .db import db

SavedArts = db.Table("SavedArts",
 db.Column('userId', db.Integer, db.ForeignKey("users.id"), primary_key=True),
 db.Column('articleId', db.Integer, db.ForeignKey("articles.id"), primary_key=True)
)
