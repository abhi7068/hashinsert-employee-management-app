import React, { useEffect, useState, useContext } from "react";
import { Avatar, List, Skeleton, Modal, Form, Input, message } from "antd";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import FormDialog from "../../components/Dialog";
import MuiSnackbar from "../../components/Snackbar";
import { SnackbarContext } from "../../context/SnackbarContext";
import { RerenderContext } from "../../context/ReRender";

// eslint-disable-next-line react/prop-types
const EditForm = ({ visible, onCancel, initialValues, onFinish }) => {
  const [form] = Form.useForm();
  const finalUser = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFinish = () => {
    form
      .validateFields()
      .then((values) => {
        onFinish({
          ...initialValues,
          employee_id: values.employee_id,
          employee_name: values.employee_name,
          email: values.email,
          hire_date: values.hire_date,
        });
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
          <Input />
        </Form.Item>
        <Form.Item
          name="employee_name"
          label="Name"
          rules={[{ required: true, message: "Please enter Name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please enter Department ID" }]}
        >
          <Input disabled />
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
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { render } = useContext(RerenderContext);
  const API_URL = "https://server-sx5c.onrender.com";

  const handleClose = () => {
    setOpen(false);
  };

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleEdit = (values) => {
    setSelectedRow({ ...values });
    setEditFormVisible(true);
  };

  const handleCancel = () => {
    setSelectedRow(null);
    setEditFormVisible(false);
  };

  const handleFinish = (values) => {
    try {
      const updatedUsers = users.map((user) => {
        if (user._id === values._id) {
          return { ...user, ...values };
        }
        return user;
      });
      const updatedUser = updatedUsers.find((user) => user._id == values._id);
      editEmployeesData(updatedUser);
      setUsers(updatedUsers);
      setSelectedRow(null);
      setEditFormVisible(false);
      setIsLoading(false);
    } catch (error) {
      console.log("error in editing the details", error);
    }
  };

  const [users, setUsers] = React.useState([]);
  const getAllEmployees = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_URL}/employee/getAll`);
      const usersList = response.data.Employee;
      setUsers(usersList);
      setIsLoading(false);
    } catch (error) {
      console.log("error in getting all employees", error);
    }
  };

  const editEmployeesData = async (user) => {
    try {
      setIsLoading(true);
      const response = await axios.put(
        `${API_URL}/employee/update/${user._id}`,
        user
      );
      if (response.data.success) {
        message.success("Data Successfully Updated");
      } else {
        message.error(response.data.msg);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("error in posting employee data", error);
    }
  };

  const deleteEmployee = async (user) => {
    try {
      setIsLoading(true);
      const response = await axios.delete(
        `${API_URL}/employee/delete/${user._id}`,
        user
      );
      if (response.data.success) {
        message.success(response.data.msg);
      } else {
        message.error(response.data.msg);
      }
      getAllEmployees();
    } catch (error) {
      console.log("error in deleteing the user", error);
    }
  };

  useEffect(() => {
    getAllEmployees();
  }, [render]);

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
      {console.log(users)}
      {isLoading ? (
        <Skeleton />
      ) : (
        <List
          className="demo-loadmore-list"
          dataSource={users}
          renderItem={(user) => (
            <List.Item
              className="border border-black rounded-lg my-2"
              actions={[
                <button
                  className="btn btn-secondary"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>,
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployee(user)}
                >
                  Delete
                </button>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={
                      user?.gender == "female"
                        ? "/FemaleAvatar.svg"
                        : "/MaleAvatar.svg"
                    }
                  />
                }
                title={
                  <p>
                    <b>{user.employee_name}</b>
                  </p>
                }
                description={`Employee ID: ${user.employee_id}, Email: ${user.email}, Hire Date: ${user.hire_date}`}
              />
            </List.Item>
          )}
        />
      )}

      <EditForm
        key={selectedRow?._id}
        visible={editFormVisible}
        onCancel={handleCancel}
        initialValues={selectedRow}
        onFinish={handleFinish}
      />
    </>
  );
};

export default Employees;
