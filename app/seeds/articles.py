from app.models import db, Article


def seed_articles():
  article1 = Article(
     title= "A New Mental Health Crisis Is Raging in Gaza",
     description="Have you ever seen a six-month old baby with exaggerated startle response?” One of my colleagues who works on our telephone counseling service was calling me for advice on how to respond to several distraught mothers asking her how to help their babies who had started showing such distressing symptoms of trauma during the recent bombing. Our telephone service was back and responding to callers on the third day of the attacks on Gaza, though of course with certain difficulties. The question took me back 20 years to when I was a young resident in the pediatric department at Nasser hospital in Khan Younis, Gaza’s second biggest city, in the southern part of the Gaza Strip. Then, my plan was to become a pediatrician. The hospital, on the western side of the city was not far from the Israeli settlements. Often in the middle of the night I used to receive mothers arriving in the pediatric emergency department with tiny children who had started screaming with no clear reason. Physical examination mostly revealed nothing abnormal. Perhaps this was the trigger that made me train to become a psychiatrist. During those nights, you could often hear shooting from inside the Israeli settlement’s high fortifications, with the bullets mostly ending in the walls of the Palestinian homes and other buildings that faced the settlements. That was the common experience we adults were used to, and of course something that children, even the very youngest, also had to live with. Thinking about those mothers and babies, I then asked myself about the likely psychological consequences of this 11-day offensive on the people of the Gaza Strip, and how it is going to be different from 2014’s Gaza war which lasted for seven weeks through July and August, including a ground invasion into Gaza. There were then 2,251 Palestinians killed and 11,000 wounded.",
     sources_id = 1,
     image_url='https://feelbetterbucket.s3.ca-central-1.amazonaws.com/1A55289F-8B96-47D6-A31498EAB161911D_source.jpg',
     website_link='https://www.scientificamerican.com/article/a-new-mental-health-crisis-is-raging-in-gaza1/'
  )
  db.session.add(article1)
  db.session.commit()

def undo_articles():
    db.session.execute('TRUNCATE articles RESTART IDENTITY CASCADE;')
    db.session.commit()
