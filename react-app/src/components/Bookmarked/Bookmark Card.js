import { makeStyles } from '@material-ui/core/styles';
import React, {useEffect} from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux'
import { unsaveArticle } from '../../store/session'
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import {loadUser} from '../../store/session'
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

const BookmarkCard = ({ article }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch()

  const unsave = (article_id) => {
    setOpen(true)
    dispatch(unsaveArticle(article_id))
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

useEffect(()=>{
  dispatch(loadUser())
}, [dispatch, open])

  return (
    <div>


      <div className='article-content'>
        <h1 className='article-header'>
          <a className={classes.link} href={article.website_link}>{article.title}</a>
          <span>
            <IconButton onClick={() => unsave(article.id)}>
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
              message="Article has been removed from bookmarks"
              action={
                <React.Fragment>
                  <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            /></span>
        </h1>
        <div className='author'>{`By: ${article.author ? article.author : ''}`}</div>
        <div className='published'>{article.published}</div>
        <div className='summary'>{article.summary}</div>
      </div>

    </div>
  )
}

export default BookmarkCard
