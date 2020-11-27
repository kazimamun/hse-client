import React, { createContext, useState } from 'react';
import './Assets/css/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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
    email : ''
  });
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Header/>
        <Switch>
          <Route path="/login">
            <Login></Login>
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
    </userContext.Provider>
  );
}

export default App;
