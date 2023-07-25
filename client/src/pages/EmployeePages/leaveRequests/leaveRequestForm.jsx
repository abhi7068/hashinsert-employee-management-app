import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

const LeaveRequestForm = () => {
    // const [date, setDate] = useState("");
    // const [reason, setReason] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setDate("");
    //     setReason("");
       
    //     onSubmit({date,reason})
    // };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reason, setReason] = useState('');
    const [status, setStatus] = useState('pending');
    const API_URL = "http://localhost:4000";
    const handleSubmit = (e) => {
        e.preventDefault();
        const leaveRequestData = {
            employee_name: name,
            employee_email: email,
            start_date: startDate,
            end_date: endDate,
            reason: reason,
            status: status,
        };
        console.log(leaveRequestData)
        axios.post(`${API_URL}/leaverequest/save`, leaveRequestData)
        .then(() => {
          // Clear the form after successful submission
          setName('');
          setEmail('');
          setStartDate('');
          setEndDate('');
          setReason('');
  
          // Fetch the updated leave requests to update the table
        //   fetchLeaveRequests();
          alert('Leave request submitted successfully!');
        })
        .catch((error) => {
          console.log('Error submitting leave request:', error);
          alert('Error submitting leave request. Please try again.');
        });
    }

    return (
        // <div>
        //     <form onSubmit={ handleSubmit }>
        //         <label>From:</label>
        //         <input type='date' value = {date} onChange={(e) => setDate(e.target.value)} required/> <br />

        //         <label>To:</label>
        //         <input type='date' value = {date} onChange={(e) => setDate(e.target.value)} required/> <br />
            
        //         <label>Reason:</label>
        //         <input type='text' value={ reason } onChange={ (e) => setReason(e.target.value)} required/> <br />
            
        //         <button type='submit'>Submit</button>
        //     </form>
        // </div>
        <div>
        <h2>Leave Request Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="reason">Reason:</label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <h3>pending</h3>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
};

export default LeaveRequestForm;