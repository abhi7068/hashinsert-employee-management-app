import React, { useState } from 'react';
import "./leaveRequest.css";
import LeaveRequestForm from "./leaveRequestForm";

const EmpleaveRequests = () => {
    const [showForm, setShowForm] = useState(false);

    const [leaveData, setLeaveData] = useState([
        { id: 1, date: "2023-07-01", reason: "Vacation", status: "approved" },
        { id: 2, date: "2023-07-05", reason: "Personal", status: "denied" },
        { id: 3, date: "2023-07-10", reason: "Sick", status: "approved" },
    ]);

    const handleFormVisibility = () => {
        setShowForm(!showForm);
    }

    const handleFormSubmit = (newLeaveRequest) => {
        setLeaveData([newLeaveRequest,...leaveData]);
        setShowForm(false);
    }

    return (
        <div>

            <div className='header'>
                <h1>Leave Requests</h1>
                <button onClick={handleFormVisibility}>+</button>
            </div>

            {showForm? (<LeaveRequestForm onSubmit = {handleFormSubmit}/>):(
                <table>
                <thead>
                    <tr>

                        <th>Date</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {leaveData.map((leave) => (
                        <tr key={leave.id}>

                            <td>{leave.date}</td>
                            <td>{leave.reason}</td>
                            <td>{leave.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            )}
            
        </div>
    );
};

export default EmpleaveRequests;