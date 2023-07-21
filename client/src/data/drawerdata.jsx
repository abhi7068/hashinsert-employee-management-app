import PeopleIcon from "@mui/icons-material/People";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DraftsIcon from "@mui/icons-material/Drafts";

const AdminDrawer = [
  {
    name: "Employees",
    path: "/admin/employees",
    icon: <PeopleIcon fontSize="small" />,
  },
  {
    name: "TimeSheets",
    path: "/admin/timesheets",
    icon: <ViewTimelineIcon fontSize="small" />,
  },
  {
    name: "CalenderView",
    path: "/admin/calenderview",
    icon: <CalendarMonthIcon fontSize="small" />,
  },
  {
    name: "LeaveRequest",
    path: "/admin/leaverequest",
    icon: <DraftsIcon fontSize="small" />,
  },
];

export { AdminDrawer };
