import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch} from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Profile from "./components/Profile/Profile"
import { authenticate } from "./store/session";
import LandingPage from './components/landingpage/LandingPage'
import Source from './components/Articles/Articles'
import Discover from './components/Discover/Discover'
function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }


  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact={true} >
          <LandingPage/>
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/profile" exact={true}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute path='/source/:id' exact={true}>
          <Source/>
        </ProtectedRoute>
        <ProtectedRoute path='/discover' exact={true}>
        <Discover/>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
