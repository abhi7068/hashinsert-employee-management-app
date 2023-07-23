import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employees from "./pages/AdminPages/Employees";
import CalenderView from "./pages/AdminPages/CalenderView";
import TimeSheets from "./pages/AdminPages/TimeSheets";
import LeaveRequest from "./pages/AdminPages/LeaveRequest";
import Error from "./pages/Errorpage/Error";
import EmpCalenderView from "./pages/EmployeePages/CalenderView/CalenderView";
import EmpTimeSheets from "./pages/EmployeePages/TimeSheets/TimeSheets";
import EmpleaveRequests from "./pages/EmployeePages/leaveRequests/leaveRequests";
import Profile from "./pages/EmployeePages/Profile/Profile";
import Employee from "./pages/EmployeePages/EmployeeDashboard/Employee"
import Edit from "./pages/EmployeePages/EmployeeDashboard/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* admin pages  */}
          <Route path="/admin/employees" element={<Employees />} />
          <Route path="/admin/timesheets" element={<TimeSheets />} />
          <Route path="/admin/calenderview" element={<CalenderView />} />
          <Route path="/admin/leaverequests" element={<LeaveRequest />} />
          {/* change below pages to employee pages  */}
          <Route path="/employee/profile" element={<Employee />} />
          <Route path="/employee/profile/edit" element={<Edit />} />
          <Route path="/employee/timesheets" element={<EmpTimeSheets />} />
          <Route path="/employee/calenderview" element={<EmpCalenderView />} />
          <Route path="/employee/leaverequests" element={<EmpleaveRequests />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
