import React from "react";
import Operation from "./operation";
import Sub from "./sub";
import LifeCycle from "./reactLifeCycle/construct";
import Gett from "./reactLifeCycle/get";
import DidMount from "./reactLifeCycle/didMount";
import Update from "./reactLifeCycle/update";
import "./App.css";
import Hooks from "./hooks";

const App = () => {
  return (
    <div className="main">
      <Operation />
      <Sub />
      <LifeCycle/>
      <Gett favcol="blue"/>
      <DidMount/>
      <Update favcol="orange"/>
      <Hooks/>

    </div>
  );
};

export default App;
