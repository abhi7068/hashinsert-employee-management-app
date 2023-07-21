import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Employees from "./pages/AdminPages/Employees";
import CalenderView from "./pages/AdminPages/CalenderView";
import TimeSheets from "./pages/AdminPages/TimeSheets";
import LeaveRequest from "./pages/AdminPages/LeaveRequest";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
