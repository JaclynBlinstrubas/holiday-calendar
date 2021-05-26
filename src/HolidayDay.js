import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import CalendarPage from './CalendarPage';

const HolidayDay = ({match}) => {
    const [holidayDay, setHolidayDay] = useState();

    useEffect(() => { 
        const url = `https://holidays.abstractapi.com/v1/?api_key=${process.env.REACT_APP_STOCK_API_KEY}&country=US&year=2021&month=${match.params.month}&day=${match.params.day}`
        
        fetch(url)
            .then(result => result.json())
            .then((result) => {
                setHolidayDay(result)
            })
        }, [])

        if (!holidayDay) {
            return <div>loading</div>  
        }

            return (
                <div>
                    {holidayDay.map((day) => {
                        return (
                            <p style={{textAlign: "center", fontSize: "22px", padding: "20px"}}>
                                <b>{day.name}</b><br />
                                country: {day.country}<br />
                                month: {day.date_month}<br />
                                day: {day.date_day}<br />
                                day of the week: {day.week_day}<br />
                            </p>
                        )
                    })}
                </div>
            );
   
}


export default HolidayDay;