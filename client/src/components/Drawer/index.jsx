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
const StyledMenuItem = styled(MenuItem)(() => ({
  "&:hover": {
    backgroundColor: "var(--primary-button)",
    color: "white",
  },
}));

// eslint-disable-next-line react/prop-types
export default function TemporaryDrawer({ isOpen, toggleDrawer }) {
  const list = () => (
    <MenuList>
      <StyledMenuItem>
        <ListItemIcon className=" hover:text-white">
          <PeopleIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Employees</ListItemText>
      </StyledMenuItem>
      <StyledMenuItem>
        <ListItemIcon className=" hover:text-white">
          <ViewTimelineIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>TimeSheet</ListItemText>
      </StyledMenuItem>
      <StyledMenuItem>
        <ListItemIcon className=" hover:text-white">
          <CalendarMonthIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>CalenderView</ListItemText>
      </StyledMenuItem>
      <StyledMenuItem>
        <ListItemIcon className=" hover:text-white">
          <DraftsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>LeaveRequets</ListItemText>
      </StyledMenuItem>
    </MenuList>
  );

  return (
    <Drawer anchor={"left"} open={isOpen} onClose={toggleDrawer}>
      {list()}
    </Drawer>
  );
}
