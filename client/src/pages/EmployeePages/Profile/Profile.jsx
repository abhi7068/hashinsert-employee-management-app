import EmployeeProfile from "../../../components/EmployeeProfile/index";
import { useQuery } from "react-query";
import { auth } from "../../../config/firebase";
import axios from "axios";

const getProfileDetails = async () => {
  try {
    const response = await axios.get(
      `https://server-sx5c.onrender.com/employee/getOne/${auth.currentUser.email}`
    );
    return response.data.Employee;
  } catch (error) {
    console.log(error);
  }
};

const Profile = () => {
  const { data, isLoading, isError, error } = useQuery(
    "profileDetails",
    getProfileDetails // function that will be called to fetch the data
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      <EmployeeProfile data={data} />
    </>
  );
};

export default Profile;
