import React, {useContext} from "react";
//import { Router } from "@reach/router";
import { BrowserRouter as Router, Link, Redirect, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserProvider from "../providers/UserProvider";
import ProfilePage from "./ProfilePage";
import { UserContext } from '../providers/UserProvider';
import PasswordReset from "./PasswordReset";

import '../App.css';
import '../SliderJS.css';
import '../useToggle';
import '../OutputForm';
import {About} from '../About.js';
import {Contact} from '../Contact.js';
import {ReviewResult} from '../ReviewResult';
//import outputForm from "../OutputForm";
import Review from "../Review";
import Home from './Home';

function Application() {
  const user = useContext(UserContext);
  return (
      user ?
      <Router>
        <Route path= "/signin" component={SignIn} />
        <Route path= "/signUp" component={SignUp} />
        <Route path= "/passwordreset" component={PasswordReset} />
        <Route path= "/profilepage" component={ProfilePage} />

        <Route path="/" exact component={SignIn} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/review"  component={Review} />
        <Route path="/reviewresult"  component={ReviewResult} />          
      </Router>
    :
      <Router>
        <Route path="/" exact component={SignIn} />
        <Route path= "/signin" component={SignIn} />
        <Route path= "/signUp" component={SignUp} />
        <Route path= "/passwordreset" component={PasswordReset} />        
      </Router>

  );
}

// function Application() {
//     const user = useContext(UserContext);
//     return (
//         user ?
//         <ProfilePage />
//       :
//         <Router>
//           <Route path= "/signin" component={SignIn} />
//           <Route path= "/signUp" component={SignUp} />
//           <Route path= "/passwordreset" component={PasswordReset} />
//           <Route path= "/profilepage" component={ProfilePage} />

//           <Route path="/" exact component={SignIn} />
//           <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} />
//           <Route path="/reviewresult"  component={ReviewResult} />          
//         </Router>

//   );
// }
export default Application;