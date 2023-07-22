import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { Table, Modal } from "antd";

const TimeSheets = () => {
  const finalUser = useContext(AuthContext);
  const navigate = useNavigate();

  const [isModalVisible, setIsModalVisibel] = React.useState(false);

  const handleFeedbackBtn = () => {
    setIsModalVisibel(true);
  };
  // navigate to / if user is not logged in

  useEffect(() => {
    if (!finalUser?.user?.email) {
      navigate("/");
    }
  }, [finalUser?.user?.email]);

  const users = [
    {
      employee_id: "1",
      employee_name: "Mike",
      desk: 32,
      time_sheet_data: "file20303",
    },
    {
      employee_id: "2",
      employee_name: "John",
      desk: 42,
      time_sheet_data: "file20203",
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
      title: "Time Sheets",
      dataIndex: "time_sheet_data",
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
            <button
              className="btn btn-secondary font-medium px-4 py-2 rounded-md text-lg text-text-color inline-block text-white "
              onClick={handleFeedbackBtn}
            >
              FeedBack
            </button>
          </span>
        </>
      ),
    },
  ];
  return (
    <>
      <h2>Time Sheets</h2>
      <Table columns={columns} dataSource={users}></Table>
      <Modal
        title="Feedback"
        open={isModalVisible}
        onOk={() => setIsModalVisibel(false)}
        onCancel={() => setIsModalVisibel(false)}
        okButtonProps={{ style: { backgroundColor: "blue" } }}
      >
        <div>
          <textarea
            rows="4"
            cols="50"
            placeholder="Enter your text here"
            style={{
              width: "100%",
              padding: "10px",
              resize: "none",
              borderRadius: "5px",
            }}
          ></textarea>
        </div>
      </Modal>
    </>
  );
};

export default TimeSheets;
