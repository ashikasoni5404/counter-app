
import React from "react";

class sub extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Nadeem"
    };
  }
  render() {
    return (
      <>
        <h1>Hello, my name is {this.state.name}</h1>
      </>
    );
  }
}

export default sub;
