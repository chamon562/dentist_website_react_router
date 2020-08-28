import React, { Component } from "react";
// pass in COmponent because were making class component

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Channee Dentistry</h1>
      <img className='home' src={'https://www.animatedimages.org/data/media/151/animated-tooth-image-0013.gif'}/>
        <p>Where the dentist go for their dental needs</p>
      </div>
    );
  }
}

export default Home;
