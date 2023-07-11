import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import Drawer from "../Drawer/index";
import Button from "../Button/index";

function Index() {
  const [isOpen, setIsOpen] = React.useState(false);

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
          <Button content="Login" />
        </div>
      </nav>
      <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}

export default Index;
