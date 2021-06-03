import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import {Button} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import {useSelector} from 'react-redux'
const useStyles = makeStyles((theme) => ({

  link: {
  textDecoration: 'none',
  color: "#DBD3D8"
 },
 login: {
  textDecoration: 'none',
  color: "#32E875",
  border: "#32E875"
 }
}))
const NavBar = () => {
  const classes = useStyles()
  const user = useSelector(state=> state.session.user)
  return (
    <nav className="nav__bar">
          <Button size="small" className={classes.link} href='/'>
            Home
          </Button>
          <div className='nav__element--login'>
          <Button outlined="#32E875" size="small" className={classes.link} href="/sign-up">
            Sign Up
          </Button>
          <Button variant="outlined"  color="primary" size="small"  className={classes.login} href="/login">
            Login
          </Button>
          </div>
          {user? <LogoutButton /> : ''}
    </nav>
  );
}

export default NavBar;
