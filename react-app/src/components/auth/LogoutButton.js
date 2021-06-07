import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import {Button} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  link: {
  textDecoration: 'none',
  color: "black",
  marginTop: "40em"
 },
 login: {
  textDecoration: 'none',
  color: "#32E875",
  border: "#32E875"
 }
}));

const LogoutButton = () => {
  const classes = useStyles()
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    dispatch(logout());
  };

  return <Button size="small" className={classes.link} onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
