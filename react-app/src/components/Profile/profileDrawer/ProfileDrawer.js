
import Divider from '@material-ui/core/Divider';
import { ListItemIcon } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import FeedComp from '../Feeds'
import React, { useEffect, useState } from "react"
import LogoutButton from "../../auth/LogoutButton"
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux"
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CreateFeedFormModal from '../../forms/'
import { NavLink } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
const drawerWidth = 350;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "black"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,

  },
  drawerPaper: {
    width: drawerWidth,
    background: "#DBD3D8"
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
  },
  margin: {
    textDecoration: 'none',
    color: 'black'
  },
  bottom: {
    alignSelf: "Flex-end"
  }
}));

const ProfileDrawer = ({ feeder: feeds }) => {
  const classes = useStyles()
  // const feeds = useSelector(state=>state.session.user.feeds)
  console.log(feeds)
  const [feedId, setFeedId] = useState(null)


  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <NavLink className={classes.margin} to='/discover'>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon size='small' />
          </ListItemIcon>
          <ListItemText primary="Discover" />
        </ListItem>
      </NavLink>
      <NavLink className={classes.margin} to='/profile'>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon size='small' />
          </ListItemIcon>
          <ListItemText primary="All Feeds" />
        </ListItem>
      </NavLink>
      <Divider />
      {feeds.map((feed) => (
        <FeedComp key={feed.id} feeds={feed} />
      ))}
      <CreateFeedFormModal feedId={feedId} setFeedId={setFeedId} />
      <Divider />
      <LogoutButton className={classes.bottom} />
    </Drawer>
  )
}

export default ProfileDrawer
