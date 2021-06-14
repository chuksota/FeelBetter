"""added author to article table

Revision ID: de6463871e55
Revises: 7b27a3415663
Create Date: 2021-06-13 22:31:25.214776

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'de6463871e55'
down_revision = '7b27a3415663'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('articles', sa.Column('author', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('articles', 'author')
    # ### end Alembic commands ###