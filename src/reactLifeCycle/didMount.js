import React from "react";

class didMount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 2000);
  }
  render() {
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>;
  }
}

export default didMount;
