import React, { useEffect, useState } from "react";
import { Table, Modal, Form, Input } from "antd";
import axios from "axios";

const EditForm = ({ visible, onCancel, initialValues, onFinish }) => {
  const [form] = Form.useForm();

  const handleFinish = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
        onFinish(values);
      })
      .catch((error) => {
        console.error("Validation error:", error);
      });
  };

  return (
    <Modal
      title="Basic Modal"
      open={visible}
      onCancel={onCancel}
      onOk={handleFinish}
      okButtonProps={{
        style: { backgroundColor: "blue", borderColor: "blue" },
      }}
    >
      <Form form={form} initialValues={initialValues} onFinish={handleFinish}>
        <Form.Item
          name="employee_id"
          label="ID"
          rules={[{ required: true, message: "Please enter ID" }]}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          name="first_name"
          label="Name"
          rules={[{ required: true, message: "Please enter Name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="department_id"
          label="Department ID"
          rules={[{ required: true, message: "Please enter Department ID" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="hire_date"
          label="Hire Date"
          rules={[{ required: true, message: "Please enter Hire Date" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const Employees = () => {
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const API_URL = "http://localhost:4000";

  const handleEdit = (values) => {
    setSelectedRow(values);
    setEditFormVisible(true);
  };
  const handleCancel = () => {
    setSelectedRow(null);
    setEditFormVisible(false);
  };
  const handleFinish = (values) => {
    const updatedUsers = users.map((user) => {
      if (user.employee_id === values.employee_id) {
        return { ...user, ...values };
      }
      return user;
    });
    setUsers(updatedUsers);
    setSelectedRow(null);
    setEditFormVisible(false);
  };
  const [users, setUsers] = React.useState([]);

  const getAllEmployees = async () => {
    try {
      const response = await axios.get(`${API_URL}/employee/getAll`);
      const usersList = response.data.Employee;
      setUsers(usersList);
      console.log(usersList);
    } catch (error) {
      console.log("error in getting all employees", error);
    }
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "employee_id",
    },
    {
      title: "Name",
      dataIndex: "first_name",
    },
    {
      title: "Desk",
      dataIndex: "department_id",
    },
    {
      title: "Hire Date",
      dataIndex: "hire_date",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <>
          <span className="text-center m-2 ">
            <button
              className="btn btn-secondary font-medium px-4 py-2 rounded-md text-lg text-text-color inline-block text-white hover:shadow-primary-button hover:-translate-y-1 transition-shadow"
              onClick={() => handleEdit(record)}
            >
              Edit
            </button>
          </span>
          <span className="text-center m-2 ">
            <button className="btn btn-danger font-medium px-4 py-2 rounded-md text-lg text-text-color inline-block text-white hover:shadow-primary-button hover:-translate-y-1 transition-shadow">
              Block
            </button>
          </span>
        </>
      ),
    },
  ];
  {
  }
  return (
    <>
      <h2>Employees</h2>
      <Table columns={columns} dataSource={users}></Table>
      <EditForm
        visible={editFormVisible}
        onCancel={handleCancel}
        initialValues={selectedRow}
        onFinish={handleFinish}
      />
    </>
  );
};

export default Employees;
