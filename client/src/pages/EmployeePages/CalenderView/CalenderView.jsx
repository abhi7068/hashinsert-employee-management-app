import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import CalenderPage from "../../AdminPages/CalenderPage";

const EmpCalenderView = () => {
  const navigate = useNavigate();
  const finalUser = React.useContext(AuthContext);

  React.useEffect(() => {
    if (!finalUser?.user?.email) {
      navigate("/");
    }
  }, [finalUser?.user?.email]);
  return (
    <>
      <div className=" text-2xl font-bold text-primary-button mb-6">
        This is calender view page
      </div>
      <CalenderPage />
    </>
  );
};

export default EmpCalenderView;
