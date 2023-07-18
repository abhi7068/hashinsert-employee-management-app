import LandingPage from "./pages/LandingPage";
<<<<<<< Updated upstream
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dummy from "./pages/DummyPage/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dummypage" element={<Dummy />} />
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
