import { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "../../../config/firebase";
import LeaveRequestForm from "./leaveRequestForm";
import "./leaveRequest.css";

const EmpleaveRequests = () => {
  const [showForm, setShowForm] = useState(false);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const API_URL = "https://server-sx5c.onrender.com";
  const currentUser = auth.currentUser;

  const handleFormVisibility = () => {
    setShowForm(!showForm);
  };

  // eslint-disable-next-line no-unused-vars
  const handleFormSubmit = (newLeaveRequest) => {
    // eslint-disable-next-line no-undef
    setLeaveData([newLeaveRequest, ...leaveData]);
    setShowForm(false);
  };
  useEffect(() => {
    axios
      .get(`${API_URL}/leaverequest/getAll/${currentUser.email}`)
      .then((response) => {
        setLeaveRequests(response.data.data);
      })
      .catch((error) => {
        console.log("Error fetching leave requests:", error);
      });
  }, []);

  return (
    <div>
      {!showForm && (
        <div className="header">
          <h1>Leave Requests</h1>
          <h1>
            <button onClick={handleFormVisibility}>+</button>
          </h1>
        </div>
      )}

      {showForm ? (
        <LeaveRequestForm />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>From</th>
              <th>To</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((leaveRequest) => (
              <tr key={leaveRequest._id}>
                <td>{leaveRequest.employee_name}</td>
                <td>{leaveRequest.employee_email}</td>
                <td>{leaveRequest.start_date}</td>
                <td>{leaveRequest.end_date}</td>
                <td>{leaveRequest.reason}</td>
                <td>{leaveRequest.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmpleaveRequests;
