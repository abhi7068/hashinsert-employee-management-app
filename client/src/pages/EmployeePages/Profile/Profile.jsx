import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const finalUser = React.useContext(AuthContext);

  React.useEffect(() => {
    if (!finalUser?.user?.email) {
      navigate("/");
    }
  }, [finalUser?.user?.email]);

  const employeeData = {
    emp_id: 1,
    name: "John Doe",
    gender: "male",
    contact: 123456789,
    email: "john.doe@example.com",
    position: "Software Engineer",
  };
  return (
    <div>
      <h1> MY PROFILE</h1>

      <div>
        <p>Employee ID: {employeeData.emp_id}</p>
        <p>Name: {employeeData.name}</p>
        <p>Gender: {employeeData.gender}</p>
        <p>Contact: {employeeData.contact}</p>
        <p>Email: {employeeData.email}</p>
        <p>Position: {employeeData.position}</p>
        {/* Add more details here based on your employee data */}
      </div>
    </div>
  );
};

export default Profile;
