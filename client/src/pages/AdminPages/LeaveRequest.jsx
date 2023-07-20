import React from "react";
import { Table } from "antd";

const LeaveRequest = () => {
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
      render: (text, record) => (
        <>
          <span className="text-center m-2 ">
            <button className="btn btn-success font-medium px-4 py-2 rounded-md text-lg text-text-color inline-block text-white hover:shadow-primary-button hover:-translate-y-1 transition-shadow">
              Accept
            </button>
          </span>
          <span className="text-center m-2 ">
            <button className="btn btn-danger font-medium px-4 py-2 rounded-md text-lg text-text-color inline-block text-white hover:shadow-primary-button hover:-translate-y-1 transition-shadow">
              Decline
            </button>
          </span>
        </>
      ),
    },
  ];
  return (
    <>
      <h2>Leave Requests</h2>
      <Table columns={columns} dataSource={users}></Table>
    </>
  );
};

export default LeaveRequest;
