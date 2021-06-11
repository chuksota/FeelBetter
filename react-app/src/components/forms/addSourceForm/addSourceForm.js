import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addSource} from '../../../store/sources'
import {Button, TextField, Popover} from "@material-ui/core"
import './addSource.css'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  popover: {
    display: 'flex',
    justifyContent: "space-between",
    width: '200px',
    marginBottom: '10px'
  },
}));
function CreateSourceForm({feedId, setFeedId, setShowModal }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [anchorEl, setAnchorEl] = React.useState(null);
  const feeds = useSelector(state=> state.session.user.feeds)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const onSubmit = (e, feed_id) => {
    e.preventDefault()
   dispatch(addSource(name, url, feed_id)).then(()=> setFeedId(!feedId))
   setShowModal(false)
   setName('')
  }

  return (
    <div className='add-source__container'>
    <h1 className='create-source--header'>Couldn't find your favorite source for psych news? Add one here!</h1>
    <form className="create__form">
    <TextField
    value={name}
    onChange={e=>setName(e.target.value)}
    label="Name Your Feed"
    ></TextField>
    <TextField
    value={url}
    onChange={e=>setUrl(e.target.value)}
    label="Please insert an rss link" />
    <Button size="small" onClick={handleClick}>submit</Button>
    <Popover
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  id={id}
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
>
{feeds.map((feed)=>(
          <Typography key={feed.id}>
            <div className={classes.popover}>
            {feed.name}
            <Button variant='contained' size='small' onClick={(e)=> onSubmit(e, feed.id)}>add</Button>
            </div>
          </Typography>
        ))}
</Popover>
  </form>
  </div>
  );
}

export default CreateSourceForm;
