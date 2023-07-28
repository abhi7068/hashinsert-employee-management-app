import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const EmpCalenderView = () => {
  const navigate = useNavigate();
  const finalUser = React.useContext(AuthContext);

  React.useEffect(() => {
    if (!finalUser?.user?.email) {
      navigate("/");
    }
  }, [finalUser?.user?.email]);
  return (
    <div className=" text-2xl font-bold text-primary-button">
      This is calender view page
    </div>
  );
};

export default EmpCalenderView;
