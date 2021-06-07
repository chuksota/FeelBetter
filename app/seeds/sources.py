from app.models import db, Source

def seed_sources():
  source1 = Source(
    name= "Scientific American Mind",
  )
  source2 = Source(
    name= "APA Monitor on Psychology",
  )
  source3 = Source(
    name= "American Psychological Association",
  )
  source4 = Source(
    name="Psychology Today"
  )
  source5 = Source(
    name="The Psychologist"
  )
  source6 = Source(
    name="Psychological review"
  )
  source7 = Source(
    name="Psychological bulletin"
  )
  source8 = Source(
    name="APS Observer"
  )
  source9 = Source(
    name="The International Journal of Psychoanalysis"
  )

  db.session.add(source1)
  db.session.add(source2)
  db.session.add(source3)
  db.session.add(source4)
  db.session.add(source5)
  db.session.add(source6)
  db.session.add(source7)
  db.session.add(source8)
  db.session.add(source9)
  db.session.commit()


def undo_sources():
    db.session.execute('TRUNCATE sources RESTART IDENTITY CASCADE;')
    db.session.commit()
