from flask import Blueprint
from app.models import Source, db

source_routes = Blueprint('source', __name__)

@source_routes.route('/<int:id>')
def getArticles(id):
  source = Source.query.get(id)
  
  return source.to_simple_dict()
