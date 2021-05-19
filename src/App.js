import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Holiday from './Holiday';
import HolidayList from './HolidayList';
import './App.css';

function App() {

  const [value, onChange] = useState(new Date());

  return (
    <div>
      

    <Header />
    <Calendar />
    <Holiday />
    <HolidayList />

    </div>
  );
}

export default App;
