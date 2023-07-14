import React from "react";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

function Dummy() {
  // eslint-disable-next-line no-unused-vars
  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return <h1>Welcome {auth?.currentUser?.displayName}</h1>;
}

export default Dummy;
