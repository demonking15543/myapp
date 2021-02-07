import React from 'react'
import './App.css';

import FunctionalComp from "./components/FunctionComp";
import {ClassComp1, ClassComp2} from "./components/ClassComp";
import Click from "./components/Click"
import { Counter } from "./components/Counter";
import ParentComp from "./components/ParentComp"
import ClassProps from './components/ClassProps';
import FunctionProps from "./components/FunctionProps";
import SubscribeComp from "./components/SubscribeComp";
class App extends React.Component {
  styles={
    fontStyle: "bold",
    color: "teal"
  };

  render(){
  return (
    <div style={this.styles}>
    <FunctionalComp />
    <ClassComp1 />
    <ClassComp2 />
    <Click />
    <Counter />
    
    <ParentComp / >
      <ClassProps name="vijay" do="code"> hi i'm also here </ClassProps>
      <ClassProps name="Rex" do="test"><Click/></ClassProps>
      <ClassProps name="Thunder" do="deploy" />
      <FunctionProps name="Functional Props" place="app.js" />
      <SubscribeComp />



    </div>
    
   
  );
  }
}

export default App;
