import React from "react"
import "../landingpage/landingpage.css"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import {useDispatch} from 'react-redux'
import { login } from "../../store/session";
import {useHistory} from 'react-router-dom'
import './footer.css'

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
    margin: "10px",
    background: "#32E875",
    color: "white"
  }
}))
const LandingPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleDemo = async (e) => {
    e.preventDefault();
    let email = "demo@aa.io";
    let password = "password";
    await dispatch(login(email, password));
    history.push('/profile')
  };

  return (
    <div className="landing">
    <div className="landing__page" >
      <section>
        <div className="both__headings">
      <h1 className="heading">Learn more about yourself, from the experts.</h1>
      <h2 className="subheading">Keep up with the latest news about your mental health, from anywhere. </h2>
      </div>
      <Button size="medium" variant='contained' className={classes.link} href="/sign-up">Get Started For Free</Button>
      <Button size="medium" variant='contained' className={classes.padding} onClick={handleDemo}>Want to try us out?</Button>
      <div className="image_container"></div>
      </section>
    </div>
    <footer className='footer'>
      <div className='footer_names--container'>
        <div className="footer__name">
          Built By: Chuks Ota
          <div className="footer__icons">
            <a href="https://github.com/chuksota">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/chuks-ota-818248127/">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default LandingPage
