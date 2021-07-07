import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import {useHistory} from 'react-router-dom'
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    background: "#32E875",
    color: "white"
  },
  login: {
    textDecoration: 'none',
    color: "#32E875",
    border: "#32E875"
  },
  padding: {
    marginLeft: "58px",
    marginTop: "10px",
    background: "#32E875",
    color: "white",
    width: "75%"
  }
}))
const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()
  const classes = useStyles()
  const handleDemo = async (e) => {
    e.preventDefault();
    let email = "demo@aa.io";
    let password = "password";
    await dispatch(login(email, password));
    history.push('/profile')
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/profile" />;
  }

  return (
    <form onSubmit={onLogin} className="loginForm">
      <fieldset>
        <legend>Log in</legend>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div  className="loginForm__input--email loginForm__input">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor="password" className="loginForm__input--password loginForm__input">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <p>Don't have an account? <a href='/sign-up'>Sign up here</a></p>
        <button className="loginForm__button"type="submit">Login</button>
        <Button size="medium" variant='contained' className={classes.padding} onClick={handleDemo}>Demo</Button>
      </div>
      </fieldset>
    </form>
  );
};

export default LoginForm;
