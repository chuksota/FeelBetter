
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import React, { useEffect, useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from "react-redux"
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import CreateFeedFormModal from '../forms/index'
const drawerWidth = 400;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "black"
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  fonts: {
    fontFamily: "sans-serif"
  }
}));

const ProfileDrawer = ({userFeeds}) => {
  console.log(userFeeds)
  const classes = useStyles()
  const feeds = useSelector(state=>state.session.user.feeds)
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return(
     <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >


    {userFeeds.map((feed)=>(
    <ListItem button onClick={handleClick}>
        <ListItemText primary={feed.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      ))}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List  component="div" disablePadding>
         {userFeeds.sources?.map(source=>
         <ListItem  button>
            <ListItemText  primary={source.name} />
          </ListItem>
          )}
        </List>
      </Collapse>
      <CreateFeedFormModal/>
      </Drawer>
  )
}

export default ProfileDrawer
