import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
    textDecoration: "none"
  }
}));

const ArticleCard = ({article}) => {
  console.log(article)
  const classes = useStyles();
  return(
    <a className={classes.link} href={article.link}>
    <Card className={classes.root}>
      <CardHeader
        title={article.title}
        subheader={article.published}
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
