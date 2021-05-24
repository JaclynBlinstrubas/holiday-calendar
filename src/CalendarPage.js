import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';


const CalendarPage = ( {match} ) => {

const month = (match.params.month-1)
const startDate = new Date (2021, month, 1)

const getTheDate = (dt) => {
const fullDate = new Date(dt)
const theDay = fullDate.getDate()

console.log(month, theDay)
}

const getTheHoliday = (dt) => {
if 

}


    return (
        <section>
            <Calendar 
            activeStartDate={startDate} 
            onClickDay={getTheDate}/>

        </section>
    )
};

export default CalendarPage;