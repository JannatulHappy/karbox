import React from "react";
import Banner from "./Banner/Banner";
import Menubar from "./Menubar/Menubar";
import "./Header.css";
import UpHeader from "./UpHeader/UpHeader";

const Header = () => {
  return (
    <div>
      <UpHeader></UpHeader>

      <header>
        <Menubar></Menubar>
        <div className="banner">
          <Banner />
        </div>
      </header>
    </div>
  );
};

export default Header;
