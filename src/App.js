import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import firebase from "firebase/app";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Auth/Login/Login';
import PrivateRoute from './Components/Auth/PrivateRoute/PrivateRoute';
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import PrivatePage from './Components/PrivatePage/PrivatePage';
import Header from './Components/Header/Header';


export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name : '',
    email : '',
    isLoggedIn : false
  });
  //sign out
  const handleLogOut = ()=>{
    firebase.auth().signOut()
    .then(result=>{
        const user = {
            name : '',
            email: '',
            isLoggedIn : false
        };
        setLoggedInUser(user);
    })
    .catch(err=>{
        console.log(err.message);
    });
};
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="container">
        <Router>
            <Header handleLogOut={handleLogOut} />
          <Switch>
            <Route path="/login">
              <Login handleLogOut={handleLogOut}></Login>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <PrivateRoute path="/private">
              <PrivatePage/>
            </PrivateRoute>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;
