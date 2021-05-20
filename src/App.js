import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Months from './Months'
import Holiday from './Holiday';
import HolidayList from './HolidayList';
import './App.css';

function App() {
const [calendar, setCalendar] = useState ("")

  return (
    <div>

      <header className="Header">
        <h1>
          <a href="/" style={{textDecoration: 'none', color : 'black'}}>Holidays</a>
          <span style={{float: 'right'}}>2021</span>
        </h1>
      </header>
      
    <Route path="/" exact component={Holiday} />
    <Months />
    <Calendar calendar={calendar}/>
    <HolidayList />

    </div>
  );
}

export default App;
