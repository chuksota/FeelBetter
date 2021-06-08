from flask import Blueprint, request
from app.models import Source, db, Feed
import feedparser

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
        temp['published'] = "Unknown"
    temp['link'] = post.link
    posts_list.append(temp)

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
