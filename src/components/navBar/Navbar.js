import React from "react";
import useWindowListener from "../hooks/useWindowListener";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
const Navbar = () => {
    const [width] = useWindowListener();
  return <div>{width <= 500 ? <MobileNavigation/> : <DesktopNavigation />}</div>
};

export default Navbar;
