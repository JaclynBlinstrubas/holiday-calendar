import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import CalendarPage from './CalendarPage';
import { Link } from 'react-router-dom'



const HolidayDay = ({match}) => {
    const [holidayDay, setHolidayDay] = useState();


    useEffect(() => { 
        const url = `https://holidays.abstractapi.com/v1/?api_key=${process.env.REACT_APP_STOCK_API_KEY}&country=US&year=2021&month=${match.params.month}&day=${match.params.day}`
        
        console.log(match.params.month)
        fetch(url)
            .then(result => result.json())
            .then((result) => {
                setHolidayDay(result)
                console.log(result)
            })
            .catch(err => console.log(err))
        }, [])

        if (!holidayDay) {
            return <div>loading</div>
            
        }

            return (
                <div>
                    {holidayDay.map((day) => {
                        return (
                            <p>
                                holiday: {day.name}
                                
                            </p>
                        )
                    })}
                </div>
            );
   
}


export default HolidayDay;