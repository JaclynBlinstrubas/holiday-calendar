import React, { useState, useEffect } from 'react';
import CalendarPage from './CalendarPage';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Months from './Months'
import HolidayDay from './HolidayDay';
import HolidayMonth from './HolidayMonth'


import './App.css';

function App() {





  

  return (
    <div>

      <header className="Header">
        <h1>
          <Link to="/" style={{textDecoration: 'none', color : 'black'}}>Holidays</Link>
          <span style={{float: 'right'}}>2021</span>
        </h1>
      </header>
      
    <Route path="/" exact component={Months} />
    <Route path="/calendar/:month" exact render={ (routerProps) => <CalendarPage match={routerProps.match} />} />
    <Route path="/calendar/:month/:day" exact render={ (routerProps) => <HolidayDay match={routerProps.match} />} />

    </div>
  );
}

export default App;
