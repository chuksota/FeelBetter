from flask import Blueprint, request
from app.models import Source, db, Feed, User, Article
import feedparser
from flask_login import current_user
source_routes = Blueprint('source', __name__)

@source_routes.route('/<int:id>')
def getArticles(id):
  source = Source.query.get(id)

  sourceArticles = feedparser.parse(source.url)
  posts = sourceArticles.entries

  posts_list = []
  posts_details={}

  for post in posts:
    temp = {}
    temp['title'] = post.title
    temp['summary'] = post.summary
    if("author" in post):
      temp['author'] = post.author
    else:
      temp["author"] = "Unknown"
    if("published" in post):
        temp['published'] = post.published
    else:
        temp['published'] = " "
    temp['link'] = post.link
    article = Article(
      title = temp['title'],
      summary = temp['summary'],
      author=temp['author'],
      published=temp['published'],
      website_link = temp['link'],
      sources_id = id
    )
    db.session.add(article)
    db.session.commit()
    source.articles.append(article)
    posts_list.append(article.to_dict())

  posts_details['posts'] = posts_list

  return posts_details

@source_routes.route('/all')
def getAll():
  sources = Source.query.all()
  sourceDict = {}
  for source in sources:
    newSource = source.to_simple_dict()
    sourceDict[newSource['id']] = newSource
  return  sourceDict

@source_routes.route('/follow', methods=["POST"])
def followSource():
  data = request.json
  source_id = int(data['source_id'])
  feed_id = int(data["feed_id"])
  feed = Feed.query.get(feed_id)
  feed.sources.append(Source.query.get(source_id))
  db.session.add(feed)
  db.session.commit()
  return {}

@source_routes.route('/unfollow', methods=["POST"])
def unfollowSource():
  data = request.json
  source_id = int(data['source_id'])
  feed_id = int(data["feed_id"])
  feed = Feed.query.get(feed_id)
  feed.sources.remove(Source.query.get(source_id))
  db.session.add(feed)
  db.session.commit()
  return {}

@source_routes.route('/add', methods=["POST"])
def addSource():
  data = request.json
  name = data['name']
  url = data['url']
  feed_id = int(data['feed_id'])
  source = Source(
    name = name,
    url = url
  )
  db.session.add(source)
  feed = Feed.query.get(feed_id)
  feed.sources.append(source)
  db.session.commit()
  return source.to_simple_dict()

@source_routes.route('/allArts', methods=["GET", "POST"])
def getAllArticles():
  data = request.json
  user = User.query.get(int(data['user_id']))
  sources = [source.to_simple_dict() for feed in user.feeds for source in feed.sources]
  urls = {}
  for source in sources:
    urls[source['id']] = source['url']
  urlsList = list(urls.values())
  todaysPosts = []
  todaysDict = {}
  for url in urlsList:
    articles = feedparser.parse(url)
    newPosts = articles.entries
    for post in newPosts:
      temp = {}
      temp['title'] = post.title
      temp['summary'] = post.summary
      if("author" in post):
        temp['author'] = post.author
      else:
        temp["author"] = " "
        if("published" in post):
          temp['published'] = post.published
        else:
          temp['published'] = " "
      temp['website_link'] = post.link
      todaysPosts.append(temp)
  todaysDict['todays'] = todaysPosts
  return todaysDict
