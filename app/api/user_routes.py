from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Article, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/me/')
@login_required
def user():
    user = User.query.get(current_user.id)
    return user.to_dict()

@user_routes.route('/save', methods=["POST"])
@login_required
def save():
    data = request.json
    article_id = int(data['article_id'])
    current_user.articles.append(Article.query.get(article_id))
    db.session.commit()
    return {}
