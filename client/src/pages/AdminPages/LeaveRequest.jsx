// eslint-disable-next-line no-unused-vars
import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import { List, message } from "antd";
import axios from "axios";

const LeaveRequest = () => {
  const finalUser = useContext(AuthContext);
  const navigate = useNavigate();
  const [leaves, setLeaves] = useState([]);
  const API_URL = "https://server-sx5c.onrender.com";

  // navigate to / if user is not logged in

  useEffect(() => {
    if (!finalUser?.user?.email) {
      navigate("/");
    }
  }, [finalUser?.user?.email]);

  const getAllLeaves = async () => {
    try {
      const response = await axios.get(`${API_URL}/leaverequest/getAll`);
      setLeaves(response.data.leaveRequest);
    } catch (error) {
      console.log("error in getting the leave requests", error);
    }
  };

  const updateLeave = async (leave, leaveStatus) => {
    try {
      leave.status = leaveStatus;
      const response = await axios.put(
        `${API_URL}/leaverequest/update/${leave._id}`,
        leave
      );
      if (response.data.success) {
        message.success(`${leave.employee_name}'s leave ${leaveStatus}`);
        axios
          .delete(`${API_URL}/leaverequest/delete/${leave._id}`)
          .then(() => getAllLeaves());
      } else {
        message.error(response.data.msg);
      }
    } catch (error) {
      console.log("error in updating the leave status", error);
    }
  };

  useEffect(() => {
    getAllLeaves();
  }, []);

  return (
    <>
      <h2>Leave Requests</h2>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={leaves}
        renderItem={(leave) => (
          <List.Item
            className="border border-black rounded-lg my-2 flex flex-wrap"
            actions={[
              <button
                className="btn btn-success gy-2"
                onClick={() => {
                  updateLeave(leave, "accepted");
                }}
              >
                Accept
              </button>,
              <button
                className="btn btn-danger"
                onClick={() => {
                  updateLeave(leave, "rejected");
                }}
              >
                Reject
              </button>,
            ]}
          >
            <List.Item.Meta
              className="p px-2"
              title={
                <div>
                  <b>{leave.employee_name}</b>
                </div>
              }
              description={
                // `Reason: ${leave.reason}, Strat Date: ${leave.start_date}, End Date: ${leave.end_date}`
                <div>
                  <p>Reason: {leave.reason}</p>
                  <p>
                    Date: {leave.start_date} to {leave.end_date}
                  </p>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default LeaveRequest;
