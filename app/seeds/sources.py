from app.models import db, Source

def seed_sources():
  source1 = Source(
    name= "Test Source",

  )
  source2 = Source(
    name= "Test Source2",
  )
  source3 = Source(
    name= "Test Source3",
  )
  
  db.session.add(source1)
  db.session.add(source2)
  db.session.add(source3)
  db.session.commit()


def undo_sources():
    db.session.execute('TRUNCATE sources RESTART IDENTITY CASCADE;')
    db.session.commit()
