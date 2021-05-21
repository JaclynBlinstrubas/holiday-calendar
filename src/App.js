import React, { useState } from 'react';
import Calendar from './Calendar';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
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
          <Link to="/" style={{textDecoration: 'none', color : 'black'}}>Holidays</Link>
          <span style={{float: 'right'}}>2021</span>
        </h1>
      </header>
      
    <Route path="/" exact component={Months} />
    <Route path="/calendar/:month" render={ (routerProps) => <Calendar match={routerProps.match} />} />

    </div>
  );
}

export default App;
