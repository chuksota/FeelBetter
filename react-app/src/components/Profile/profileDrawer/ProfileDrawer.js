
import Divider from '@material-ui/core/Divider';
import { ListItemIcon } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import FeedComp from '../Feeds'
import React, { useEffect, useState } from "react"
import LogoutButton from "../../auth/LogoutButton"
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux"
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CreateFeedFormModal from '../../forms/createCollectionForm'
import { NavLink } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import {loadUser} from '../../../store/session'
import CreateSourceFormModal from '../../forms/addSourceForm/index'


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
    background: "#0E0E0E",
    '&::-webkit-scrollbar': {
      display: "none"
    }
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
    color: '#fff'
  },
  bottom: {
    alignSelf: "Flex-end"
  },
  text: {
    color: 'fff'
  },
  button:{
    color: '#fff'
  }
}));

const ProfileDrawer = ({ followed, setIsLoading}) => {
  const dispatch= useDispatch()
  const classes = useStyles()
  const [feedId, setFeedId] = useState(null)
  const feeds = useSelector(state=>state.session.user.feeds)

  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch, followed, setIsLoading])

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
            <SearchIcon  className={classes.button} size='small' />
          </ListItemIcon>
          <ListItemText  primary="Discover" />
        </ListItem>
      </NavLink>
      <NavLink className={classes.margin} to='/profile'>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon className={classes.button} size='small' />
          </ListItemIcon>
          <ListItemText primary="All Feeds" />
        </ListItem>
      </NavLink>
      <Divider />
      {feeds.map((feed) => (
        <FeedComp key={feed.id} feeds={feed} />
      ))}
      <Divider/>
      <CreateFeedFormModal feedId={feedId} setFeedId={setFeedId} />
      <Divider />
      <CreateSourceFormModal/>
      <Divider/>
      <LogoutButton variant='outlined' />
    </Drawer>
  )
}

export default ProfileDrawer
