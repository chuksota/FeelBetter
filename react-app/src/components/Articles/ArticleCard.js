import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import IconButton from '@material-ui/core/IconButton';
import {useDispatch} from 'react-redux'
import {saveArticle} from '../../store/session'
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    marginLeft: 30,
    marginBottom: 10
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  link: {
    textDecoration: "none",
    display: 'flex',
    color: 'darkgrey'
  },
  button: {
    color: '#fff',
    marginTop: 0
  }
}));

const ArticleCard = ({ article }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch()
  const save = (article_id) =>{
    setOpen(true)
    dispatch(saveArticle(article_id))
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div>

      <a className={classes.link} href={article.website_link}>
        <div className='article-content'>
          <h1 className='article-header'>{article.title}
            </h1>
          <div className='author'>{`By: ${article.author? article.author : ''}`}</div>
          <div className='published'>{article.published}</div>
          <div className='summary'>{article.summary}</div>
        </div>
      </a>
            <IconButton  onClick={() => save(article.id)}>
              <BookmarkIcon className={classes.button} />
            </IconButton>
            <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Article has been bookmarked"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  )
}

export default ArticleCard
