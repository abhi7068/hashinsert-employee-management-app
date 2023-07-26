import React, { useEffect, useState } from 'react';
import {auth,db} from '../../../config/firebase';
import 'firebase/auth';
import axios from 'axios';
const Profile = () => {
//   const navigate = useNavigate();
//   const finalUser = React.useContext(AuthContext);

    const [userData, setUserData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const currentUser = auth.currentUser;
    const API_URL = "https://server-sx5c.onrender.com";
    console.log(currentUser)

//   useEffect(() => {
//     // Get the current user from Firebase Authentication
//     const currentUser = firebase.auth().currentUser;
//     console.log(currentUser)
//   })
    useEffect(() => {
        if (currentUser) {
        // Fetch user-specific data from the backend API
        axios.get(`${API_URL}/employee/getOne/${currentUser.email}`)
            .then((response) => {
                console.log(response)
                setUserData(response.data.Employee);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, [currentUser]);
    const handleEditSubmit = (e) => {
        e.preventDefault();
        const dataId = userData._id;
        const newEmpName = e.target.elements.empname.value;
        axios.put(`${API_URL}/employee/update/${dataId}`,{
            employee_name:newEmpName
        })
        .then((response) => {
            // Update the state with the updated data
            setUserData([response.data.Employee]);
            setIsEditing(false);
            alert('Data updated successfully!');
          })
          .catch((error) => {
            console.log(error);
            alert('Error updating data. Please try again.');
          });
    }
    return (
        <div>
            <h1> WELCOME <b>{userData.employee_name}</b></h1>
            {!isEditing &&
            (<div>
            <p>Employee ID: {userData?.employee_id}</p>
            <p>Name: {userData?.employee_name}</p>
            <p>Gender: {userData?.gender}</p>
            <p>Contact: {userData.phone_number}</p>
            <p>Email: {userData?.email}</p>
            <p>salary: {userData?.salary}</p>
            <p>Position: {userData?.role}</p>
            {/* Add more details here based on your employee data */}
            </div>)}
            {isEditing && (
                <form onSubmit={handleEditSubmit}>
                    <div>
                        <label>
                        Name:
                        <input type="text" name="empname" defaultValue={userData.employee_name} />
                        </label>
                    </div>
                    <button type="submit">Save</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            )}
            {!isEditing && (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
        </div>
    );
};

export default Profile;
