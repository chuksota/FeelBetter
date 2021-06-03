from flask import Blueprint, jsonify
from app.models import Feed, Source, db, User
from flask import request
from flask_login import current_user

feed_routes = Blueprint('feed', __name__)

# @feed_routes.route('/userFeeds', methods=["GET"])
# def getFeeds():
  # data = request.json
  # source_id = data["source_id"]
  # sources = Source.query.get(int(source_id))
  # print(sources.to_dict())
  # source_id = data['source_id']

  # feeds = Feed.query.filter_by(user_id=current_user.id).all()

  # Movie.query.join(Movie.genres).filter(
  #       Genre.type == genre.type)
  # feeds = Feed.query.filter_by(user_id=user_id).all()
  # print("===================", feeds[0].to_dict())
  # return {"feeds": [feed.to_dict() for feed in feeds]}
  # return jsonify(feeds)


@feed_routes.route('', methods=["POST"])
def addFeed():
  data = request.json
  feed = Feed (
  name = data['name'],
  user_id = current_user.id
  )
  db.session.add(feed)
  db.session.commit()
  return feed.to_dict()

@feed_routes.route('/<int:id>', methods=['DELETE'])
def deleteFeed(id):
  feed = Feed.query.get(id)
  print("-------------------", feed)
  db.session.delete(feed)
  db.session.commit()
  return {}
