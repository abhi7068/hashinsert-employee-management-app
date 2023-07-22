// eslint-disable-next-line no-unused-vars
import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import { Table } from "antd";

const LeaveRequest = () => {
  const finalUser = useContext(AuthContext);
  const navigate = useNavigate();
  const users = [
    {
      employee_id: "1",
      employee_name: "Mike",
      desk: 32,
      leave_details: "Personal",
    },
    {
      employee_id: "2",
      employee_name: "John",
      desk: 42,
      leave_details: "Medical",
    },
  ];
  const columns = [
    {
      title: "Id",
      dataIndex: "employee_id",
    },
    {
      title: "Name",
      dataIndex: "employee_name",
    },
    {
      title: "Desk",
      dataIndex: "desk",
    },
    {
      title: "Details",
      dataIndex: "leave_details",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      // eslint-disable-next-line no-unused-vars
      render: (text, record) => (
        <>
          <span className="text-center m-2 ">
            <button className="btn btn-success font-medium px-4 py-2 rounded-md text-lg text-text-color inline-block text-white ">
              Accept
            </button>
          </span>
          <span className="text-center m-2 ">
            <button className="btn btn-danger font-medium px-4 py-2 rounded-md text-lg text-text-color inline-block text-white ">
              Decline
            </button>
          </span>
        </>
      ),
    },
  ];
  // navigate to / if user is not logged in

  useEffect(() => {
    if (!finalUser?.user?.email) {
      navigate("/");
    }
  }, [finalUser?.user?.email]);
  return (
    <>
      <h2>Leave Requests</h2>
      <Table
        columns={columns}
        dataSource={users}
        key={users.employee_id}
      ></Table>
    </>
  );
};

export default LeaveRequest;
