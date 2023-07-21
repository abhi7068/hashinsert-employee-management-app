import React, { useEffect, useState, useContext } from "react";
import { Table, Modal, Form, Input } from "antd";
// import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import FormDialog from "../../components/Dialog";
import MuiSnackbar from "../../components/Snackbar";
import { SnackbarContext } from "../../context/SnackbarContext";
// eslint-disable-next-line react/prop-types
const EditForm = ({ visible, onCancel, initialValues, onFinish }) => {
  const [form] = Form.useForm();
  const finalUser = useContext(AuthContext);
  const navigate = useNavigate();

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
  // navigate to / if user is not logged in
  useEffect(() => {
    if (!finalUser?.user?.email) {
      navigate("/");
    }
  }, [finalUser?.user?.email]);

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
  const [open, setOpen] = React.useState(false);
  const { snackbar, handleSnackbarClose } = React.useContext(SnackbarContext);
  const handleClose = () => {
    setOpen(false);
  };

  const handleDialogOpen = () => {
    setOpen(true);
  };
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  // const API_URL = "http://localhost:4000";

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

  // const getAllEmployees = async () => {
  //   try {
  //     const response = await axios.get(`${API_URL}/employee/getAll`);
  //     const usersList = response.data.Employee;
  //     setUsers(usersList);
  //     console.log(usersList);
  //   } catch (error) {
  //     console.log("error in getting all employees", error);
  //   }
  // };

  // useEffect(() => {
  //   getAllEmployees();
  // }, []);

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
              className="btn btn-secondary font-medium px-4 py-2 rounded-md text-lg text-text-color inline-block text-white "
              onClick={() => handleEdit(record)}
            >
              Edit
            </button>
          </span>
          <span className="text-center m-2 ">
            <button className="btn btn-danger font-medium px-4 py-2 rounded-md text-lg text-text-color inline-block text-white ">
              Block
            </button>
          </span>
        </>
      ),
    },
  ];

  return (
    <>
      <MuiSnackbar
        open={snackbar.open}
        handleClose={handleSnackbarClose}
        message={snackbar.message}
        severity={snackbar.severity}
      />
      <FormDialog open={open} handleClose={handleClose} />
      <div className=" flex flex-row justify-between py-4 mb-4 items-center">
        <h2>Employees</h2>
        {/* add a dialog box here with email field and add and cancel buttons  */}
        <button
          className="bg-primary-button font-medium px-4 py-2 rounded-md text-lg text-text-color inline-block text-white "
          onClick={handleDialogOpen}
        >
          <AddIcon className="  inline text-inherit" />
          New
        </button>
      </div>
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
