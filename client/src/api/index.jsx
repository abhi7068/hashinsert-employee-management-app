import axios from "axios";
const baseURL = "http://localhost:4000/employee";
export const getEmployeeById = async(id) => {
    try {
        const res=axios.get(`${baseURL}/getOne/${id}`);
        return res;
    } catch (error) {
        return null;
    }
}