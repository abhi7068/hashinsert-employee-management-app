import React from 'react';
import { useState } from 'react';

const LeaveRequestForm = ({ onSubmit }) => {
    const [date, setDate] = useState("");
    const [reason, setReason] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setDate("");
        setReason("");
       
        onSubmit({date,reason})
    };

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label>Date:</label>
                <input type='date' value = {date} onChange={(e) => setDate(e.target.value)} required/>
            
                <label>Reason:</label>
                <input type='text' value={ reason } onChange={ (e) => setReason(e.target.value)} required/>
            
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default LeaveRequestForm;