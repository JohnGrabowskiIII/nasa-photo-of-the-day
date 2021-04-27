import React, {useState} from "react";
import axios from 'axios';
import "./App.css";

import Photo from './component/Photo.js';
import InfoBar from './component/InfoBar.js';
import InfoExtended from './component/InfoExtended.js';
import ImageText from './component/ImageText.js';
import DateSetter from './component/DateSetter.js';
import Footer from './component/Footer.js';

function App() {

  // INITIAL DATE FORM VALUES
  const initDateFormValue = {};

  // STATE FOR BASE API URL
  const [nasaUrl] = useState('');
  // STATE FOR API CALL
  const [pOTD, setPOTD] = useState([]);
  // STATE FOR DATE OBJECT
  // STATE FOR DATE FORM

  // USE EFFECT SETS STATE
  // RUNS ON FIRST RENDER AND WHEN DATE CHANGES

  // USE EFFECT GRABS TODAYS DATE & SETS STATE
  // RUNS ON FIRST RENDER ONLY

  // DEFINE DATE FORM

  // DATE CLICKHANDLER

  return (
    // DIV SETS WIDTH FOR PAGE
    <div className="App">
      <Photo />
      <InfoBar />
      <InfoExtended />
      <ImageText />
      <DateSetter />
      <Footer />
    </div>
  );
}

export default App;
