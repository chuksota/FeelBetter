import React from 'react'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteOne, add} from '../store/session'
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from 'react-redux'
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
const FeedComp = ({feeds}) => {
  console.log(feeds)
  const classes = useStyles()
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const [feedId, setFeedId] = React.useState(null)

  const handleDelete = (id) => {
    dispatch(deleteOne(id)).then(() => setFeedId(!feedId))
  }

  const handleClick = () => {
    setOpen(!open);
  };

  return(
    <>
    <List>
        <ListItem key={feeds?.id} button onClick={handleClick}>
          <IconButton aria-label='edit' className={classes.margin} >
            <EditIcon fontSize="small"/>
          </IconButton>
          <IconButton aria-label="delete" className={classes.margin} onClick={()=> handleDelete(feeds?.id)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
          <ListItemText primary={feeds?.name} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {feeds?.sources?.map(source =>
            <ListItem button>
              <ListItemText primary={source?.name} />
            </ListItem>
          )}
        </List>
      </Collapse>
      </List>
    </>
  )
}

export default FeedComp
