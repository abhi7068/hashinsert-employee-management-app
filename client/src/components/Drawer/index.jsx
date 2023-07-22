import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";

//import PeopleIcon from "@mui/icons-material/People";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DraftsIcon from "@mui/icons-material/Drafts";
import { AdminDrawer, EmployeeDrawer } from "../../data/drawerdata";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import LogoImage from "/logo2.png";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Link } from "react-router-dom";


const StyledMenuItem = styled(MenuItem)(() => ({

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// eslint-disable-next-line no-unused-vars
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({

  "&:hover": {
    backgroundColor: "#4919f5",
    color: "white",
  },
}));

const LogoContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  marginBottom: 20,
  marginTop: 20,
  marginLeft: 4,
}));

const StyledLogo = styled("img")(() => ({
  width: "auto",
  height: 24,
  marginRight: 8,
  "&.hover": {
    pointerEvents: "none",
  },
}));

// eslint-disable-next-line react/prop-types
export default function TemporaryDrawer({ isOpen, toggleDrawer }) {
  const finalUser = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      finalUser.updateToNull();
      toggleDrawer();
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  let sideDrawerItems;

  if (finalUser?.user?.role === "admin") {
    sideDrawerItems = AdminDrawer;
  } else if (finalUser?.user?.role === "employee") {
    sideDrawerItems = EmployeeDrawer;
  } else {
    sideDrawerItems = [];
  }

  const list = () => (
    <MenuList>

      <LogoContainer>
        <StyledLogo src={LogoImage} alt="logo" />
      </LogoContainer>

      <StyledMenuItem>
        <ListItemIcon className="hover:text-white">
          <PeopleIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Employees</ListItemText>
      </StyledMenuItem>
      <StyledMenuItem>
        <ListItemIcon className="hover:text-white">

      <StyledMenuItem component = { Link } to="/timeSheets" onClick={toggleDrawer}>
        <ListItemIcon className=" hover:text-white">

          <ViewTimelineIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>TimeSheet</ListItemText>
      </StyledMenuItem>

      <StyledMenuItem>
        <ListItemIcon className="hover:text-white">

      <StyledMenuItem component = { Link } to="/calenderView" onClick={toggleDrawer}>
        <ListItemIcon className=" hover:text-white">

          <CalendarMonthIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>CalendarView</ListItemText>
      </StyledMenuItem>
      <StyledMenuItem>
        <ListItemIcon className="hover:text-white">
      <StyledMenuItem component = { Link } to="/leaveRequests" onClick={toggleDrawer}>
        <ListItemIcon className=" hover:text-white">
          <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>LeaveRequests</ListItemText>
      </StyledMenuItem>
      {user && (

      {sideDrawerItems.map((item, index) => (
        <StyledMenuItem key={index} className="hover:text-white">
          <ListItemIcon>{item.icon}</ListItemIcon>
          <Link to={item.path}>
            <ListItemText>{item.name}</ListItemText>
          </Link>
        </StyledMenuItem>
      ))}
      {finalUser?.user?.email && (

        <StyledMenuItem onClick={handleLogout}>
          <ListItemIcon className="hover:text-white">
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </StyledMenuItem>
      )}
    </MenuList>
  );

  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
      {list()}
    </Drawer>
  );
}
