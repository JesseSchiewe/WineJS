import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
//import './Slider.css';
import './App.css';
import App from './App';
import './SliderJS.css';
import './useToggle.js';
import './OutputForm.js';
import {Home} from './Home.js';
import {About} from './About.js';
import {Contact} from './Contact.js';
// import './routes.js';
// import Main from "./Main";
// import Main2 from "./Main2"
// import OutputForm from "./OutputForm";
//


/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 */

// ReactDOM.render(
//   <Main2/>, 
//   document.getElementById("root")
// );

// const Home = () => (
//   <Fragment>
//       <div className="WineJS Wine Review"></div>
//           <h1>Output Form</h1>
//           <h2>Producer: </h2>
//           <h2>Wine Name:  </h2>
//           <h2>Vintage: </h2>
//           <h2>Nose Intensity:  </h2>
//   </Fragment>
// );

// ReactDOM.render(
//   <Router>
//     <App path="/review" />
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/contact">Contact</Link></li>
//       <li><Link to="/app">App</Link></li>
//       <li><Link to="/review">Review</Link></li>
//     </ul>

//     <Route path="/" exact component={Home} />
//     <Route path="/about" component={About} />
//     <Route path="/app"  component={App} />
//     {/* <Route path="/review"  component={Review} /> */}

//   </Router>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Router>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/app">App</Link></li>
      <li><Link to="/review">Review</Link></li>
    </ul>

    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/app"  component={App} />
    <Route path="/review"  component={App} />
    {/* <Route path="/review"  component={Review} /> */}

  </Router>,
  document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
