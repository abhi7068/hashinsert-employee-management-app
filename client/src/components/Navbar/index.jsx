import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import GoogleIcon from "@mui/icons-material/Google";
import Drawer from "../Drawer/index";
import Avatar from "@mui/material/Avatar";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Index() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [user, isLoading] = useAuthState(auth);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex flex-row justify-between py-12 mb-8">
        <div className="text-text-color">
          {isOpen ? (
            <MenuOpenIcon
              fontSize="large"
              onClick={toggleDrawer}
              className="cursor-pointer"
            />
          ) : (
            <MenuIcon
              fontSize="large"
              onClick={toggleDrawer}
              className="cursor-pointer"
            />
          )}
        </div>

        <div>
          {user && (
            <div>
              <Avatar
                src={user.photoURL}
                alt="avatar"
                className="object-contain cursor-pointer mb-4"
              />
            </div>
          )}
          {!user && (
            <button
              className="bg-primary-button font-medium px-4 py-2 rounded-md text-lg text-text-color inline-block text-white hover:shadow-primary-button hover:-translate-y-1 transition-shadow"
              onClick={signInWithGoogle}
            >
              <GoogleIcon className="mx-1 inline text-inherit" /> Login
            </button>
          )}
        </div>
      </nav>
      <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Backdrop open={isLoading} style={{ zIndex: 9999 }}>
        <CircularProgress className=" text-primary-button" />
      </Backdrop>
    </>
  );
}

export default Index;
