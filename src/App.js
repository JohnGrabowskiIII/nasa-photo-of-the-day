import React, {useState, useEffect} from "react";
import axios from 'axios';

import Photo from './component/Photo.js';
import InfoBar from './component/InfoBar.js';
import InfoExtended from './component/InfoExtended.js';
import ImageText from './component/ImageText.js';
import DateSetter from './component/DateSetter.js';
import Footer from './component/Footer.js';

function App() {

  // INITIAL DATE FORM VALUES
  const initDateFormValue = {
    Year: '',
    Month: '',
    Day: ''
  };

  // STATE FOR BASE API URL
  const [nasaUrl] = useState('https://api.nasa.gov/planetary/apod?api_key=qGnLbV1JnhgmlVa8qHCzuFrhIFpdbDGg6J9GXafR&date=2021-04-27');
  // STATE FOR API CALL
  const [pOTD, setPOTD] = useState([]);
  // STATE FOR DATE OBJECT
  const [callDate, setCallDate] = useState((new Date()));
  // STATE FOR DATE FORM
  const [dateFormValue, setDateFormValue] = useState(initDateFormValue);


  // USE EFFECT SETS STATE
  // RUNS ON FIRST RENDER AND WHEN DATE CHANGES
  useEffect(() => {
    axios.get(nasaUrl)
      .then(res => {
        console.log(res);
        setPOTD(res.data);
      })
      .catch(err => console.log(err));
  }, [callDate]);

  // DEFINE DATE CHANGE HANDLER
  const dateOnChange = e => {
    const name = e.target.name;
    setDateFormValue({...dateFormValue, [name]: e.target.value})
    console.log(dateFormValue);
  }

  const dateSubmitHandler = e => {
    setDateFormValue(initDateFormValue);
    e.preventDefault();
  }

  // DEFINE DATE FORM
  let dateForm = <form>
    <label>
      Year:
      <input type='text' name='Year' value={dateFormValue.Year} onChange={dateOnChange} />
    </label>
    <label>
      Month:
      <input type='text' name='Month' value={dateFormValue.Month} onChange={dateOnChange} />
    </label>
    <label>
      Day:
      <input type='text' name='Day' value={dateFormValue.Day} onChange={dateOnChange} />
    </label>
    <button onClick={dateSubmitHandler} />
  </form>

  // DATE CLICKHANDLER

  return (
    // DIV SETS WIDTH FOR PAGE
    <div className="App">
      <Photo url={pOTD.url} hdUrl={pOTD.hdurl} mediaType={pOTD.media_type} />
      <InfoBar date={pOTD.date} title={pOTD.title} />
      <InfoExtended />
      <ImageText info={pOTD.explanation} />
      <DateSetter dateForm={dateForm} />
      <Footer />
    </div>
  );
}

export default App;
