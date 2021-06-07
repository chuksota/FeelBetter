"""changed the source table

Revision ID: 28c1e518d7bc
Revises: 
Create Date: 2021-06-06 19:51:09.456565

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '28c1e518d7bc'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('sources',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=300), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('articles',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('image_url', sa.String(), nullable=True),
    sa.Column('description', sa.String(length=5000), nullable=True),
    sa.Column('sources_id', sa.Integer(), nullable=True),
    sa.Column('website_link', sa.String(), nullable=True),
    sa.Column('date_posted', sa.Date(), nullable=True),
    sa.ForeignKeyConstraint(['sources_id'], ['sources.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('feeds',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=20), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('SourceFeed',
    sa.Column('feedId', sa.Integer(), nullable=False),
    sa.Column('sourceId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['feedId'], ['feeds.id'], ),
    sa.ForeignKeyConstraint(['sourceId'], ['sources.id'], ),
    sa.PrimaryKeyConstraint('feedId', 'sourceId')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('SourceFeed')
    op.drop_table('feeds')
    op.drop_table('articles')
    op.drop_table('users')
    op.drop_table('sources')
    # ### end Alembic commands ###