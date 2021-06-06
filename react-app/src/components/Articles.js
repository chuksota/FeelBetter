import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from 'react-router-dom'
import ProfileDrawer from './profileDrawer/ProfileDrawer'
import {loadA} from '../store/source'
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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
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
}));
const Source = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch()
  const feeds = useSelector(state=> state.session.user.feeds)
  const {id} =  useParams()
  const articles = useSelector(state=> state.sources)

  useEffect(()=>{
    dispatch(loadA(id))
  },[dispatch, id])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
  <>
    // <ProfileDrawer feeder={feeds}/>
    <div className="right_view_area">
    <Card className={classes.root}>
      <CardHeader
        title={articles[1]?.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={articles[1]?.image_url}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Recent bombings by Israel have caused more than just physical trauma
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {articles[1]?.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    </>
  );
}

export default Source
