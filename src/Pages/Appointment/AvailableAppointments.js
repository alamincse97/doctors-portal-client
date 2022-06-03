import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(date => setServices(date));
    }, [])
    return (
        <div>
            <h4 className='text-xl text-secondary text-center'></h4>Available Appointments on {format(date, 'pp')}
            <div>

            </div>
        </div>
    );
};

export default AvailableAppointments;