from app.models import db, Article


def seed_articles():
  article1 = Article(
     title= "Test Article",
     description= "This is a test article to make sure I can get the information necessary.",
     sources_id = 1
  )
  db.session.add(article1)
  db.session.commit()

def undo_articles():
    db.session.execute('TRUNCATE articles RESTART IDENTITY CASCADE;')
    db.session.commit()
