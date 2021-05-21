import React, { useState, useEffect } from 'react';






const HolidayDay = () => {
const [holidayDay, setHolidayDay] = useState ([])


const getSetHolidayDay = () => {
const url = 'https://holidays.abstractapi.com/v1/?api_key=REACT_APP_STOCK_API_KEY&'
fetch(url)
    .then((result) => result.json())
    .then((result) => setHolidayDay(results)
    .catch(console.error)
};





    return (
        <section className="day-container">
            


        </section>
    );
};

export default HolidayDay;