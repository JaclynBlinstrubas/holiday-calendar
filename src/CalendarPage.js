import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { Switch, Route, Redirect, Link, useHistory } from 'react-router-dom';


const CalendarPage = ( {match} ) => {
    let history =  useHistory()

    const month = (match.params.month-1)
    const startDate = new Date (2021, month, 1)

    const getTheDate = (dt) => {
        const fullDate = new Date(dt)
        const theDay = fullDate.getDate()

        console.log(month, theDay)
        let path = `/calendar/${month+1}/${theDay}`
        history.push(path)
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