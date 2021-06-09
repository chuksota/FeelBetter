import React from 'react'
import {follow, unfollow} from '../../store/sources'
import {useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));
const SourceCard = ({source, feeds, followed, setFollowed, sourcesObj}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const sendFollow = (feed_id, source_id, isFollowed) => {
    if(isFollowed){
      dispatch(unfollow(feed_id, source_id))
    }else{
    dispatch(follow(feed_id, source_id))
    }
    setFollowed({...followed, [source.id]: !followed[source.id]})
    handleClose()
  }

  return(
    <div>
      {source.name}
      <Button onClick={handleClick}>{sourcesObj[source.id]? "Followed" : "Follow"}</Button>
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
            <Button onClick={()=> sendFollow(feed.id, source.id) }>add</Button>
          </Typography>
        ))}

      </Popover>
    </div>
  )
}

export default SourceCard
