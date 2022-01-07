import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {appointmentId}=useParams()
    const [appointment, setAppointment] = useState([]);
  
  // get order by using email
  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
    return (
        <div>
            <h2 className="my-5 text-center fw-bold fs-2">Please pay for:{appointment.name} for {appointment?.userName} </h2>
            <h4>pay: ${appointment?.price}</h4>
        </div>
    );
};

export default Payment