import React, { useState, useEffect } from 'react';




const url = `https://holidays.abstractapi.com/v1/?api_key=${process.env.REACT_APP_STOCK_API_KEY}&country=US&month=7&day=4`

const HolidayDay = () => {
const [holidayDay, setHolidayDay] = useState();


useEffect(() => { 
    fetch(url)
        .then(res => res.json())
        .then((res) => {
            console.log(res)
        })
        .catch(err => console.log(err))
}, []) 

    return(
        <div>
        


        </div>
    )
       

        

   
};

export default HolidayDay;