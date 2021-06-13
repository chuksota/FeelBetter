from app.models import db, Feed, Source

def seed_feeds():
  feed1 = Feed(
    name= "Sites",
    user_id= 1,
  )
  feed1.sources.append(Source.query.get(1))
  feed1.sources.append(Source.query.get(2))
  feed1.sources.append(Source.query.get(3))

  feed2 = Feed(
    name= "Peer Reviewed",
    user_id= 1,
  )
  feed2.sources.append(Source.query.get(4))
  feed2.sources.append(Source.query.get(5))
  feed2.sources.append(Source.query.get(6))
  feed3 = Feed(
    name= "Blogs",
    user_id= 1,
  )
  feed3.sources.append(Source.query.get(7))
  feed3.sources.append(Source.query.get(8))
  feed3.sources.append(Source.query.get(9))
  db.session.add(feed1)
  db.session.add(feed2)
  db.session.add(feed3)
  db.session.commit()


def undo_feeds():
    db.session.execute('TRUNCATE feeds RESTART IDENTITY CASCADE;')
    db.session.commit()
