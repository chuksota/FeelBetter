import React from 'react'
import {follow, unfollow} from '../../store/sources'
import {useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  discoverButtons: {
    background: "#32E875",
    color: "white"
  }
}));
const SourceCard = ({source, feeds, followed, setFollowed, sourcesObj, feedObj}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const source_id = source.id
  const handleClick = (event) => {
    if(sourcesObj[source.id]){
      const feed_id = feedObj[source_id]
      dispatch(unfollow(feed_id, source_id))
      setFollowed({...followed, [source.id]: !followed[source.id]})
    }else{
    setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const sendFollow = (feed_id, source_id) => {
    dispatch(follow(feed_id, source_id))
    setFollowed({...followed, [source.id]: !followed[source.id]})
    handleClose()
  }

  return(
    <div>
      <div className='feed_content'>
        <NavLink to={`/source/${source.id}`} className='source_name'>
        {source.name}
      <Button variant='outlined' size='small' className={classes.discoverButtons} onClick={handleClick}>{sourcesObj[source.id]? "Followed" : "Follow"}</Button>
        </NavLink>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {feeds.map((feed)=>(
          <Typography key={feed.id}>
            {feed.name}
            <Button variant='contained'  onClick={()=> sendFollow(feed.id, source.id)}>add</Button>
          </Typography>
        ))}
      </Popover>
    </div>
  )
}

export default SourceCard
