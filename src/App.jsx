import { useState,useEffect } from "react";
import Clock from './FamilyClock.jsx';
import './App.css';
import familypic from './assets/Image.jpg';
import SmallText from "./Text.jsx";

function App(){

  return(
    <>
    
    <Clock/>
    <SmallText/>
    </>
  )
};

export default App