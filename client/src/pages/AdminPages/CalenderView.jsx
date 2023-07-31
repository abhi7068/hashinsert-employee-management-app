import React, { useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import CalenderPage from "./CalenderPage";

const CalenderView = () => {
  const finalUser = React.useContext(AuthContext);
  const navigate = useNavigate();

  // navigate to / if user is not logged in

  useEffect(() => {
    if (!finalUser?.user?.email) {
      navigate("/");
    }
  }, [finalUser?.user?.email]);
  return (
    <>
      <div className=" text-xl font-bold text-primary-button mb-6">
        CalenderView
      </div>
      <CalenderPage />
    </>
  );
};

export default CalenderView;
