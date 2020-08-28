import React from "react";
import "./App.css";
// making sepereate pages
// if grey because havent used yet
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import Procedures from "./Procedures";
import Contact from "./Contact";

function App() {
// add some procedures before the return
const procedures = [
  'Deep Cleaning',
  'Oral Surgery',
  'Root Canal',
  'Crown',
  'Implants',
  'Fillings'
]

  return (
    // just cut and pasted routers that were in a div into the <Router><Home />
        // <Procedures />
        // <Contact />
        // Router can only have one div that its refrenceing good prace to put in div
    <Router>
      <div className="App">
      <nav>
      {/* inside Link tag key word to  this adds a space{' '}*/}
        <Link to='/'>Home</Link>{' '}
        {/* <br/> */}
        <Link to='/procedures'>See our Procedures</Link>{' '}
        <Link to='/contact'>Contact Us!</Link> {' '}
      </nav>
      {/* <a href={ '/procedures'}>procedures</a> */}
        {/* get react router dom need to install -done*/}
        {/* pass Home Component here */}
        {/* set each component as its own route rap entire return statement set up a router component*/}
        {/* route this is the path now pass in the component for that path */}
        {/* for every home route you have put in exact ikey worrd so it doesn thso whome */}
        {/* took out component={Procedures}  and added         <Route path='/procedures'  render={() =><Procedures procedures={procedures} />} />*/}
        <Route exact path='/' component={Home} />
        <Route path='/procedures' render={() =><Procedures procedures={procedures} />} />
        <Route path='/contact' component={Contact} />
      </div>
    </Router>
  );
}

export default App;
