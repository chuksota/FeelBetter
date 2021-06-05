
import Divider from '@material-ui/core/Divider';

import Drawer from '@material-ui/core/Drawer';
import FeedComp from '../Feeds'
import React, { useEffect, useState } from "react"
import LogoutButton from "../auth/LogoutButton"
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux"

import CreateFeedFormModal from '../forms/index'


const drawerWidth = 400;
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

const ProfileDrawer = ({ feeder: feeds }) => {
  console.log(feeds)
  const classes = useStyles()
  // const feeds = useSelector(state=>state.session.user.feeds)

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
        {feeds.map((feed) => (
          <FeedComp key={feed.id} feeds={feed}/>
        ))}
      <CreateFeedFormModal feedId={feedId} setFeedId={setFeedId}/>
      <Divider />
      <LogoutButton />
    </Drawer>
  )
}

export default ProfileDrawer
