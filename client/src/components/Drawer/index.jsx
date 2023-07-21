import Drawer from "@mui/material/Drawer";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import { AdminDrawer } from "../../data/drawerdata";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import LogoImage from "/logo2.png";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
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
  const isAdmin = true;
  const SideDrawer = isAdmin && AdminDrawer;
  const list = () => (
    <MenuList key={0}>
      <LogoContainer key={1}>
        <StyledLogo src={LogoImage} alt="logo" />
      </LogoContainer>
      {SideDrawer.map((item, index) => (
        <StyledMenuItem key={index} className="hover:text-white">
          <ListItemIcon>{item.icon}</ListItemIcon>
          <Link to={item.path}>{item.name}</Link>
        </StyledMenuItem>
      ))}
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
