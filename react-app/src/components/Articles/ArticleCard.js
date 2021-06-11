import { makeStyles } from '@material-ui/core/styles';
import React from 'react'


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
    color:'darkgrey'
  }
}));

const ArticleCard = ({article}) => {
  const classes = useStyles();


  return(
    <a className={classes.link} href={article.link}>
      <div className='article-content'>
        <h1 className='article-header'>{article.title}</h1>
        <div>{`By: ${article.author}`}</div>
        <div className='published'>{article.published}</div>
        <div className='summary'>{article.summary}</div>
      </div>
    </a>
  )
}

export default ArticleCard
