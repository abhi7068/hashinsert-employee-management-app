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
<<<<<<< Updated upstream
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuthState } from "react-firebase-hooks/auth";

import LogoImage from "/logo2.png";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
=======
import { Link } from "react-router-dom";


>>>>>>> Stashed changes
const StyledMenuItem = styled(MenuItem)(() => ({
  "&:hover": {
    backgroundColor: "var(--primary-button)",
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
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const [user, isLoading] = useAuthState(auth);
  const list = () => (
    <MenuList>
<<<<<<< Updated upstream
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
=======
      <StyledMenuItem component = { Link } to="/timeSheets" onClick={toggleDrawer}>
        <ListItemIcon className=" hover:text-white">
>>>>>>> Stashed changes
          <ViewTimelineIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>TimeSheet</ListItemText>
      </StyledMenuItem>
<<<<<<< Updated upstream
      <StyledMenuItem>
        <ListItemIcon className="hover:text-white">
=======
      <StyledMenuItem component = { Link } to="/calenderView" onClick={toggleDrawer}>
        <ListItemIcon className=" hover:text-white">
>>>>>>> Stashed changes
          <CalendarMonthIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>CalendarView</ListItemText>
      </StyledMenuItem>
<<<<<<< Updated upstream
      <StyledMenuItem>
        <ListItemIcon className="hover:text-white">
=======
      <StyledMenuItem component = { Link } to="/leaveRequests" onClick={toggleDrawer}>
        <ListItemIcon className=" hover:text-white">
>>>>>>> Stashed changes
          <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>LeaveRequests</ListItemText>
      </StyledMenuItem>
      {user && (
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
