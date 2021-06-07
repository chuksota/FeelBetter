from app.models import db, Article


def seed_articles():
  article1 = Article(
     title= "A New Mental Health Crisis Is Raging in Gaza",
     description="Have you ever seen a six-month old baby with exaggerated startle response?” One of my colleagues who works on our telephone counseling service was calling me for advice on how to respond to several distraught mothers asking her how to help their babies who had started showing such distressing symptoms of trauma during the recent bombing. Our telephone service was back and responding to callers on the third day of the attacks on Gaza, though of course with certain difficulties. The question took me back 20 years to when I was a young resident in the pediatric department at Nasser hospital in Khan Younis, Gaza’s second biggest city, in the southern part of the Gaza Strip. Then, my plan was to become a pediatrician. The hospital, on the western side of the city was not far from the Israeli settlements. Often in the middle of the night I used to receive mothers arriving in the pediatric emergency department with tiny children who had started screaming with no clear reason. Physical examination mostly revealed nothing abnormal. Perhaps this was the trigger that made me train to become a psychiatrist. During those nights, you could often hear shooting from inside the Israeli settlement’s high fortifications, with the bullets mostly ending in the walls of the Palestinian homes and other buildings that faced the settlements. That was the common experience we adults were used to, and of course something that children, even the very youngest, also had to live with. Thinking about those mothers and babies, I then asked myself about the likely psychological consequences of this 11-day offensive on the people of the Gaza Strip, and how it is going to be different from 2014’s Gaza war which lasted for seven weeks through July and August, including a ground invasion into Gaza. There were then 2,251 Palestinians killed and 11,000 wounded.",
     sources_id = 1,
     image_url='https://feelbetterbucket.s3.ca-central-1.amazonaws.com/1A55289F-8B96-47D6-A31498EAB161911D_source.jpg',
     website_link='https://www.scientificamerican.com/article/a-new-mental-health-crisis-is-raging-in-gaza1/'
  )
  article2 = Article(
    title="Pregnant during Pandemic: The Bump That No One Saw",
    description="This morning I caught my lonely reflection in my hallway mirror: my work-appropriate blouse fitted down to where the view of my computer’s Webcam ends, then heavily stretched over my rounded stomach—the bottom few inches of my belly protruding over baggy sweatpants below. I’m nine months pregnant, but the world hasn’t seen me.On June 28, 2020, in the thick of COVID lockdown, I found out I was expecting my first child. Inability to drink alcohol during the pandemic aside, being pregnant in 2020 has been nothing short of bizarre and challenging. At times I have felt maddeningly alone, missing the rewards of sharing my life milestone or the ability to reach out for help when I needed it most.In July I saw my baby on ultrasound for the first time—alone. COVID restrictions meant my husband was not allowed to come with me to doctor’s appointments. I laid there on the exam table, my face shielded behind my mask, looking at my doctor, shielded behind hers, as she pointed to the screen. Suddenly there was a beating heart and a third face—the only one in the room that was not veiled. This is how it will be through delivery: I will never see my obstetrician’s face.For months my belly has grown a few inches south of my Webcam: no colleagues have seen me pregnant. And by the time I return to the physical office in Boulder, Colo., where I work, I will have a child that nobody saw me grow. Many of my colleagues don’t even know I’m pregnant. Without the need to explain my getting visibly rounder, it feels like an odd secret—a secret I would not have had the option to hide any other time.Sometimes I’m grateful for the isolation. I got to endure nausea in private, be exhausted in private and work from my couch on the days when it felt too hard to stand. Luckily for me, I had a job that allowed me to work from home. Luckily for me, I had a job at all. And as others also reported in a 2020 survey of 70 pregnant women in Ireland, taking a break from life’s fast pace while I grew another life did, at times, bring me peace.My challenge instead has been letting go of the picture I had in my head of what pregnancy was “supposed” to look like. Gone is the fantasy of the Good Samaritan the crowded bus giving up his seat for me or of colleagues in the hall asking how I’m doing. Also gone are the strangers trying to touch my belly or giving me unsolicited advice.",
    sources_id=1,
    image_url='https://feelbetterbucket.s3.ca-central-1.amazonaws.com/39170FFA-529C-446E-A1F329F53BDB945E_source.jpg',
    website_link='https://www.scientificamerican.com/article/pregnant-during-pandemic-the-bump-that-no-one-saw/'
  )
  article3 = Article(
    title="Managing Emotional Polarization This Holiday Season",
    description='In an ordinary year, holiday angst is very real: Anxiety, depression and stress are all known to spike between Thanksgiving and the year’s end, as social engagements, travel and bills for holiday gifts simultaneously surge. Yet 2020 has been far from ordinary, so we must expect that this holiday season will be unusual.This year has been characterized by extremes. Health care faced a crisis of epic and dangerous proportions, yet medical innovation is at an all-time high. Financial markets experienced both staggering losses and colossal gains. As for the election … does that even need to be explained? Along these lines, when it comes to our emotions this holiday season, we must expect emotional polarization: We will simultaneously feel better and worse than ever.Let’s start with the good news.General holiday stress stands to be lower than in typical years since social expectations are diminished, and there is greater acceptance of human limitations and struggles. No one will take it personally if our gifts or meals aren’t “perfect” this year, as long as we acknowledge our struggles. That creates less pressure when it comes to our performance and our appearances. Perhaps for the first time in history, it is tolerable—even respectable—to be up-front with others when we are having a hard time.Along these lines, pure introverts who are truly timid and shy are likely to breathe a sigh of relief this holiday season, as COVID-19 risks provide a socially acceptable reason to decline invitations to holiday parties and get-togethers. This is serendipitous, since 2020 has been chock-full of social landmines such as discussions about the election, masking, diversity/inclusion, homeschooling, and the future fate of our economy (in addition to “the usual” contentious conversation topics such as money and family).The best reason to feel better than usual this holiday season is that 2020 is nearly over! With the specter of the election behind us, and the very real potential for a vaccine around the bend, it’s hard not to feel hopeful and optimistic.',
    sources_id=1,
    image_url='https://feelbetterbucket.s3.ca-central-1.amazonaws.com/new1.jpg',
    website_link="https://www.scientificamerican.com/article/managing-emotional-polarization-this-holiday-season/"
  )
  article4 = Article(
    title='Virtual Reality and the COVID Mental Health Crisis',
    description='I am being challenged daily. As a frontline doctor, I find that the COVID-19 pandemic has not only tested my clinical abilities but also strained my capacity to bear witness to grievous suffering. This suffering extends well beyond the physical distress of hospitalized patients battling the virus. The pandemic has also spawned a mental health crisis beyond anything I have seen in 25 years of caring for patients. The statistics are overwhelming: CDC research indicates that 31 percent of Americans have reported anxiety and depression during the pandemic, and 11 percent have considered suicide. A national shortage in mental health clinicians existed before COVID-19. Now, health care organizations must decide how to rapidly scale and deploy behavioral health care to a geographically widespread and increasingly isolated populace. There is no time to wait for expansion of the mental health workforce.Doctors are now turning to an unlikely solution: virtual reality (VR). When most people think of VR, they think of a gaming technology—a toy for pent-up teens to play first-person shooter games in their parents’ basement. But for decades, scientists around the world have been quietly discovering the surprising health benefits of VR for ailments ranging from severe pain, to PTSD, to substance use, to existential anxiety. Over 5,000 studies reveal that VR has an uncanny ability to diminish pain, steady nerves, and boost mental health—and best of all, it can be administered at home without a trained clinician.VR works by creating a sense of psychological presence. When VR scientists speak of presence, they mean the technology has a unique ability to convey a sense of just “being there,” wherever there happens to be. It might be relaxing by the ocean or soaring in a hang glider or swimming with dolphins without leaving their couch. VR can even cause people to think and feel like another person altogether. For example, using a headset can enable people with depression to assume the body of Sigmund Freud and engage in self-counseling through his persona, allow people with eating disorders to experience life by way of a healthy avatar, and teleport people outside their own body so that they may gain new insights about the nature of dying. In all of these cases, if the VR is any good, the user feels transported to a new virtual environment and temporarily accepts it as reality. When used in the right way, at the right time and with the right patient, these virtual journeys can change mind and body for the better, all from the comfort of home.Until recently, VR technology has been too expensive, unreliable and unwieldy for doctors to prescribe home-based virtual therapeutics. Now that’s all changed, and the timing couldn’t be better given the mental health crisis of COVID-19. In the past five years, multinational companies, including Facebook, Google, HP and others, have invested billions of dollars into developing and expanding the VR industry. As a result, explosive advances have been made in delivering low-cost, portable and high-quality VR to the masses. We have now reached an inflection point where the technology is cheap enough, its quality good enough and the science voluminous enough to think seriously about leveraging VR to improve mental health at scale with home-based treatments.',
    sources_id=1,
    image_url='https://feelbetterbucket.s3.ca-central-1.amazonaws.com/new2.jpg',
    website_link='https://www.scientificamerican.com/article/virtual-reality-and-the-covid-mental-health-crisis/'
  )
  article5 = Article(
    title='Has the Drug-Based Approach to Mental Illness Failed?',
    description='First, there were two studies by the World Health Organization that found that longer-term outcomes for schizophrenia patients in three “developing” countries were much better than in the U.S. and five other “developed” countries. This didn’t really make sense to me, and then I read this: in the developing countries, they used antipsychotic drugs acutely, but not chronically. Only 16 percent of patients in the developing countries were regularly maintained on antipsychotics, whereas in the developed countries this was the standard of care. That didn’t fit with my understanding that these drugs were an essential treatment for schizophrenia patients.Second, a study by Harvard researchers found that schizophrenia outcomes had declined in the previous 20 years, and were now no better than they had been in the first third of the 20th century. That didn’t fit with my understanding that psychiatry had made great progress in treating people so diagnosed.Those studies led to my questioning the story that our society told about those we call “mad,” and I got a book contract to dig into that question. That project turned into Mad in America, which told of the history of our society’s treatment of the seriously mentally ill, from colonial times until today—a history marked by bad science and societal mistreatment of those so diagnosed.',
    sources_id=1,
    image_url='https://feelbetterbucket.s3.ca-central-1.amazonaws.com/new3.jpg',
    website_link='https://www.scientificamerican.com/article/has-the-drug-based-approach-to-mental-illness-failed/'
  )
  article6 = Article(
    title="COVID-19 Worsens Obsessive-Compulsive Disorder—but Therapy Offers Coping Skills",
    description='Before the COVID-19 pandemic took hold in the United States, Chris Trondsen felt his life was finally in control. As someone who has battled obsessive-compulsive disorder (OCD) and other mental health issues since early childhood, it’s been a long journey.Ive been doing really, really well,” Trondsen said. “I felt like most of it was pretty much—I wouldnt say ‘cured’—but I definitely felt in remission or under control. But this pandemic has been really difficult for me.”Trondsen, 38, a Costa Mesa, California, therapist who treats those with obsessive-compulsive and anxiety disorders, has found himself excessively washing his hands once again. He’s experiencing tightness in his chest from anxiety—something he hadn’t felt in so long that it frightened him into getting checked out at an urgent care center. And because he also has body dysmorphic disorder, he said, he’s finding it difficult to ignore his appearance when he’s looking at himself during his many Zoom appointments with clients each day.From the early days of the coronavirus outbreak, experts and media have warned of a mounting mental health crisis as people contend with a pandemic that has upended their lives. A recent KFF poll found that about 4 in 10 adults say stress from the coronavirus negatively affected their mental health. (KHN is an editorially independent program of KFF, the Kaiser Family Foundation.)',
    sources_id=1,
    image_url='https://feelbetterbucket.s3.ca-central-1.amazonaws.com/new4.jpg',
    website_link='https://www.scientificamerican.com/article/covid-19-worsens-obsessive-compulsive-disorder-but-therapy-offers-coping-skills1/'
  )
  db.session.add(article1)
  db.session.add(article2)
  db.session.add(article3)
  db.session.add(article4)
  db.session.add(article5)
  db.session.add(article6)
  db.session.commit()

def undo_articles():
    db.session.execute('TRUNCATE articles RESTART IDENTITY CASCADE;')
    db.session.commit()