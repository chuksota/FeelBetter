import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState({});
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    let errors = {};
    if (!username) {
      errors.username = "Please enter a username";
    }
    if (!email) {
      errors.email = "Please enter an email";
    }
    if (!password) {
      errors.password = "Please enter a password";
    }
    if(password !== repeatPassword){
      errors.repeatPassword = "Passwords must match"
    }
    setErrors(errors)
  },[
    username,
    email,
    password,
    repeatPassword
  ])

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(username, email, password));
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signupForm">
      <form onSubmit={onSignUp}>
        <fieldset>
          <legend>Create an Account</legend>
          <div className="signupForm__input--username signupForm__input">
            <label>
              User Name
              {errors.username && (
                <div className="signupForm__error">{errors.username}</div>
              )}
            </label>
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div className="signupForm__input--email signupForm__input">
            <label>
              Email
              {errors.email && (
                <div className="signupForm__error">{errors.email}</div>
              )}
            </label>
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div className="signupForm__input--password signupForm__input">
            <label>Password
            {errors.password && (
                <div className="signupForm__error">{errors.password}</div>
              )}
            </label>
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div className="signupForm__input--password signupForm__input">
            <label>
              Repeat Password
              {errors.repeatPassword && (
                <div className="signupForm__error">{errors.password}</div>
              )}
            </label>
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <p>Already have an account? <a href='/login'>Login here.</a></p>
          <button className="signup__form--button" type="submit">Sign Up</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpForm;
