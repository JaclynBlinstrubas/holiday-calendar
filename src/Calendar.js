import React from 'react';
import Calendar from 'react-calendar';



const CalendarPage = ( {match} ) => {
// const [calendar, setCalendar] = useState ("")

// const year = 2021
// const month = ["January", "February", "March", "April", "May", "June", "July",
// "August", "September", "October", "November", "December"];
const month = (match.params.month-1)
const startDate = new Date(2021, month)

//the month (2021,__) should correspond with the month name in the array so when the user clicks on the month, the correct month displays.. it updates in the browser

    return (
        <section>
            <Calendar activeStartDate={startDate}/>
            

        </section>
    )
};

export default CalendarPage;