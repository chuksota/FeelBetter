from flask import Blueprint, jsonify
from app.models import Feed, Source, db
from flask import request
feed_routes = Blueprint('feed', __name__)

@feed_routes.route('/')
def getFeeds():
  data = request.json
  source_id = data["source_id"]
  user_id = data["user_id"]
  sources = Source.query.get(int(source_id))
  print(sources.to_dict())
  print('==============', user_id)
  # source_id = data['source_id']
  # source = Source.query.get(int(source_id))
  feeds = Feed.query.join(Feed.sources).filter(

  )
  # Movie.query.join(Movie.genres).filter(
  #       Genre.type == genre.type)
  # feeds = Feed.query.filter_by(user_id=user_id).all()
  print("===================", feeds)
  return {"feeds": [feed.to_dict() for feed in feeds]}


@feed_routes.route('', methods=["POST"])
def addFeed():
  data = request.json
  feed = Feed (
  name = data['name'],
  user_id = data["user_id"]
  )
  db.session.add(feed)
  db.session.commit()
  return feed.to_dict()
