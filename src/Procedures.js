import React, { Component } from "react";

class Procedures extends Component {
  render() {
    //   make a map array
    const procedursList = this.props.procedures.map((p, idx) =>{
        return <li key={idx}>{p}</li>
    })
    console.log(this.props.procedures)
    return (
      <div>
        <h1>Procedures</h1>
        {procedursList}
      </div>
    );
  }
}

export default Procedures;
