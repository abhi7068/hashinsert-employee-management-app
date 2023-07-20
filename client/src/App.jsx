import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dummy from "./pages/DummyPage/index";
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
          <Route path="/homepage" element={<Dummy />} />
          <Route path="/admin/employees" element={<Employees />} />
          <Route path="/admin/timesheets" element={<TimeSheets />} />
          <Route path="/admin/calenderview" element={<CalenderView />} />
          <Route path="/admin/leaverequest" element={<LeaveRequest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
