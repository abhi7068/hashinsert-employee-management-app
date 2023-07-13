import Drawer from "@mui/material/Drawer";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import PeopleIcon from "@mui/icons-material/People";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DraftsIcon from "@mui/icons-material/Drafts";

import LogoImage from "/logo2.png";
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
          <ViewTimelineIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>TimeSheet</ListItemText>
      </StyledMenuItem>
      <StyledMenuItem>
        <ListItemIcon className="hover:text-white">
          <CalendarMonthIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>CalendarView</ListItemText>
      </StyledMenuItem>
      <StyledMenuItem>
        <ListItemIcon className="hover:text-white">
          <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>LeaveRequests</ListItemText>
      </StyledMenuItem>
    </MenuList>
  );

  return (
    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
      {list()}
    </Drawer>
  );
}
