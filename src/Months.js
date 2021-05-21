import React from 'react';
import { Link } from 'react-router-dom'

const Months = () => {
    return (
        <div>
            <section id="month-container">
                <section className="month-buttons">
                    <Link to="calendar/1">
                        <button>January</button>
                    </Link>
                    <Link to="calendar/2">
                        <button>February</button>
                    </Link>
                    <Link to="calendar/3">
                        <button>March</button>
                    </Link>
                    <Link to="calendar/4">
                        <button>April</button>
                    </Link>
                    <Link to="calendar/5">
                        <button>May</button>
                    </Link>
                    <Link to="calendar/6">
                        <button>June</button>
                    </Link>
                    <Link to="calendar/7">
                        <button>July</button>
                    </Link>
                    <Link to="calendar/8">
                        <button>August</button>
                    </Link>
                    <Link to="calendar/9">
                        <button>September</button>
                    </Link>
                    <Link to="calendar/10">
                        <button>October</button>
                    </Link>
                    <Link to="calendar/11">
                        <button>November</button>
                    </Link>
                    <Link to="calendar/12">
                        <button>December</button>
                    </Link>                   
                </section>
            </section>
        </div>
    );
};

export default Months;