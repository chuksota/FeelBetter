from app.models import db, Feed, Source

def seed_feeds():
  feed1 = Feed(
    name= "Test Feed",
    user_id= 1,
  )
  feed1.sources.append(Source.query.get(1))
  feed1.sources.append(Source.query.get(2))
  feed1.sources.append(Source.query.get(3))

  feed2 = Feed(
    name= "Test Feed2",
    user_id= 1,
  )
  feed2.sources.append(Source.query.get(1))
  feed2.sources.append(Source.query.get(2))
  feed2.sources.append(Source.query.get(3))
  feed3 = Feed(
    name= "Test Feed3",
    user_id= 1,
  )
  feed3.sources.append(Source.query.get(1))
  feed3.sources.append(Source.query.get(2))
  feed3.sources.append(Source.query.get(3))
  db.session.add(feed1)
  db.session.add(feed2)
  db.session.add(feed3)
  db.session.commit()


def undo_feeds():
    db.session.execute('TRUNCATE feeds RESTART IDENTITY CASCADE;')
    db.session.commit()
