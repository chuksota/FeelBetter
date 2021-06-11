import React from 'react'
import {follow, unfollow} from '../../store/sources'
import {useDispatch, useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import {TextField} from '@material-ui/core'
import {addAndFollow} from '../../store/feeds'


const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  discoverButtons: {
    background: "#32E875",
    color: "white"
  },
  popover: {
    display: 'flex',
    justifyContent: "space-between",
    width: '200px',
    marginBottom: '10px'
  },
  miniCreateForm: {
    display: 'flex',
    flexDirection: "column"
  }
}));
const SourceCard = ({source, feeds, followed, setFollowed, sourcesObj, feedObj}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [name, setName] = React.useState('')
  const classes = useStyles()
  const dispatch = useDispatch()
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const source_id = source.id
  const user = useSelector(state=> state.session.user)

  const handleSubmit =  () => {
      dispatch(addAndFollow(user.id, name, source_id)).then(()=> setFollowed({...followed, [source.id]: !followed[source.id]}))
      setName('')
      setAnchorEl(null)

    }


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
        </NavLink>
      <Button variant='outlined' size='small' className={classes.discoverButtons} onClick={handleClick}>{sourcesObj[source.id]? "Followed" : "Follow"}</Button>
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
            <div className={classes.popover}>
            {feed.name}
            <Button variant='contained' size='small' onClick={()=> sendFollow(feed.id, source.id)}>add</Button>
            </div>
          </Typography>
        ))}
        <div className={classes.miniCreateForm}>
      <TextField
      value={name}
      onChange={e=>setName(e.target.value)}
      label="Create New Feed"
      />
      <Button onClick={handleSubmit}>Create</Button>
      </div>
      </Popover>
    </div>
  )
}

export default SourceCard
