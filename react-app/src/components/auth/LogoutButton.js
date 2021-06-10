import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import {Button} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  link: {
  textDecoration: 'none',
  color: "black",
 },
 login: {
  textDecoration: 'none',
  color: "red",
  border: "#32E875"
 }
}));

const LogoutButton = () => {
  const classes = useStyles()
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    dispatch(logout());
  };

  return <Button size="small" variant='outlined' className={classes.login} onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
