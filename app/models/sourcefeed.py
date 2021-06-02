from .db import db

SourceFeed = db.Table("SourceFeed",
 db.Column('feedId', db.Integer, db.ForeignKey("feeds.id"), primary_key=True),
 db.Column('sourceId', db.Integer, db.ForeignKey("sources.id"), primary_key=True)
)
