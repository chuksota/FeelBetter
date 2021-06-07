from flask import Blueprint
from app.models import Source, db
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
    if(post.author):
      temp['author'] = post.author
    else:
      temp["author"] = "Unknown"
    temp['published'] = post.published
    temp['link'] = post.link
    posts_list.append(temp)

  posts_details['posts'] = posts_list

  return posts_details


# ['title', 'title_detail', 'links', 'link', 'comments', 'authors', 'author', 'author_detail', 'published', 'published_parsed', 'tags', 'id', 'guidislink', 'summary', 'summary_detail', 'wfw_commentrss', 'slash_comments']
