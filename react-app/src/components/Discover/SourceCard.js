import React, {useState} from 'react'
import {follow} from '../../store/sources'
import {useDispatch, useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));
const SourceCard = ({source, feeds}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [source_id, setSourceId] = React.useState(null)
  const [feed_id, setFeedId] = React.useState(null)
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const sendFollow = (feed_id=1, source_id) => {
    dispatch(follow(feed_id, source_id))
  }
  // const [followed, setFollowed] = useState(false)

  return(
    <div>
      {source.name}
      <Button onClick={handleClick}>Follow</Button>
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
