import React, { useEffect } from 'react'
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteOne, loadUser} from '../../store/session'
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import {ListItemIcon} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    color: '#fff'
  },
  navLink: {
    textDecoration: "none",
    color: "#fff"
  },
  icon: {
    color: '#fff'
  }
}));
const FeedComp = ({feeds}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(true);
  const [feedId, setFeedId] = React.useState(null)

  const handleDelete = (id) => {
    setFeedId(id)
    dispatch(deleteOne(id))
  }


  useEffect(()=>{
    dispatch(loadUser())
  }, [dispatch, feedId])

  return(
    <>
    <List>
        <ListItem key={feeds.id}>
          <ListItemText className={classes.navLink} primary={feeds?.name} />
          <IconButton aria-label="delete" className={classes.margin} onClick={()=> handleDelete(feeds?.id)}>
          <DeleteIcon className={classes.icon}  fontSize="small" />
        </IconButton>
        </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {feeds?.sources?.map(source =>
            <NavLink  key={source.id} className={classes.navLink} to={`/source/${source.id}`}>
            <ListItem key={source.id} button>
              <ListItemIcon>
              <StarOutlineIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={source?.name} />
            </ListItem>
            </NavLink>
            )}
        </List>
      </Collapse>
      </List>
    </>
  )
}

export default FeedComp
