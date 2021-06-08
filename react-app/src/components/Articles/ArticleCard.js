import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React from 'react'
import { NavLink } from 'react-router-dom';

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
    textDecoration: "none"
  }
}));

const ArticleCard = ({article}) => {
  const classes = useStyles();

  return(
    <a className={classes.link} href={article.link}>
    <Card className={classes.root}>
      <CardHeader
        title={article.title}
        subheader={article.published}
        // subheader={`By: ${article.author}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {article.summary}
        </Typography>
      </CardContent>
    </Card>
    </a>
  )
}

export default ArticleCard
