import LandingPage from "./pages/LandingPage";
<<<<<<< Updated upstream
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employees from "./pages/AdminPages/Employees";
import CalenderView from "./pages/AdminPages/CalenderView";
import TimeSheets from "./pages/AdminPages/TimeSheets";
import LeaveRequest from "./pages/AdminPages/LeaveRequest";
import Error from "./pages/Errorpage/Error";
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
          <Route path="/employee/profile" element={<Employees />} />
          <Route path="/employee/timesheets" element={<TimeSheets />} />
          <Route path="/employee/calenderview" element={<CalenderView />} />
          <Route path="/employee/leaverequests" element={<LeaveRequest />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
=======
//import Navbar from "./components/Navbar";
import EmployeeDashboard from "./pages/EmployeePages/EmployeeDashboard";
import Index from './components/EmployeeNavbar/EmployeeNavbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TimeSheets from "./pages/EmployeePages/TimeSheets/TimeSheets";
import CalenderView from "./pages/EmployeePages/CalenderView/CalenderView";
import LeaveRequests from "./pages/EmployeePages/leaveRequests/leaveRequests";

function App() {
  return (
   <BrowserRouter>
   <Index/>
 <Routes>
  <Route exact path ='/' element = {<EmployeeDashboard/>}/>
  <Route exact path ='/timeSheets' element = {<TimeSheets/>}/>
  <Route exact path ='/calenderView' element = {<CalenderView/>}/>
  <Route exact path ='/leaveRequests' element = {<LeaveRequests/>}/>
 </Routes>
   </BrowserRouter>
>>>>>>> Stashed changes
  );
}

export default App;
