from app.models import db, Source

def seed_sources():
  source1 = Source(
    name= "National Institute of Mental Health",
    url="https://www.nimh.nih.gov/site-info/index-rss.atom?format=xml"
  )
  source2 = Source(
    name= "Psychology Today",
    url="https://www.psychologytoday.com/us/front/feed"

  )
  source3 = Source(
    name= "American Psychological Association",
    url="https://www.apa.org/news/psycport/psycport-rss.xml"
  )
  source4 = Source(
    name="Sharp Brains",
    url='https://sharpbrains.com/feed/'
  )
  source5 = Source(
    name="Child Psychology Blog",
    url="https://www.psy-ed.com/wpblog/feed/"
  )
  source6 = Source(
    name="Positive Psychology News",
    url="https://positivepsychologynews.com/feed"
  )
  source7 = Source(
    name="Advances in the history of psychology",
    url="https://ahp.apps01.yorku.ca/feed/"
  )
  source8 = Source(
    name="Beck Institute for Cognitive Behavior",
    url="https://beckinstitute.org/blog/feed/"
  )
  source9 = Source(
    name="PsyBlog by Dr. Jeremy Dean",
    url="http://feeds.feedburner.com/PsychologyBlog"
  )
  source10 = Source(
    name="Psygreg",
    url="https://www.psychreg.org/feed"
  )
  source11 = Source(
    name="SACAP",
    url="https://www.sacap.edu.za/blog/feed/"
  )
  source12 = Source(
    name="Psychmechanics",
    url="https://www.psychmechanics.com/feed/"
  )
  source13 = Source(
    name="Work Place Psychology",
    url="https://workplacepsychology.net/feed/"
  )
  source14 = Source(
    name="Psychology Matters",
    url="https://www.psychologymatters.asia/rss/"
  )
  source15 = Source(
    name="Psychotherapy.net",
    url="https://www.psychotherapy.net/blog/rss"
  )
  source16 = Source(
    name="The Brain Lady",
    url="https://www.blog.theteamw.com/feed/"
  )
  source17 = Source(
    name="The Splintered Mind | Reflections in Philosophy of Psychology, Broadly Construed",
    url="http://feeds.feedburner.com/blogspot/FHhv"
  )
  source18= Source(
    name="Portland PsychoTherapy",
    url="https://portlandpsychotherapy.com/feed/"
  )
  source19 = Source(
    name="Youth Sports Psychology by Patrick Cohn",
    url="https://www.youthsportspsychology.com/youth_sports_psychology_blog/category/youth-sports-psychology-blog/feed/"
  )
  source20= Source(
    name="New View Psychology Blog",
    url="https://newviewpsychology.com.au/blog/feed/"
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
  db.session.add(source10)
  db.session.add(source11)
  db.session.add(source12)
  db.session.add(source13)
  db.session.add(source14)
  db.session.add(source15)
  db.session.add(source16)
  db.session.add(source17)
  db.session.add(source18)
  db.session.add(source19)
  db.session.add(source20)
  db.session.commit()


def undo_sources():
    db.session.execute('TRUNCATE sources RESTART IDENTITY CASCADE;')
    db.session.commit()
