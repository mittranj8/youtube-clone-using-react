import { Avatar } from "@material-ui/core";
import {
  Apps,
  Menu,
  Notifications,
  Search,
  VideoCall,
} from "@material-ui/icons";
import React from "react";
import "./NavMenu.css";

function NavMenu() {
  return (
    <div className="navMenu">
      <div className="navMenu_left">
        <Menu />
        <img
          className="navMenu_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1004px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="youtube_logo"
        />
      </div>

      <div className="navMenu_center">
        <input placeholder="Search" type="text" />
        <Search className="navMenu_searchButton" />
      </div>

      <div className="navMenu_right">
        <VideoCall className="navMenu_icons" />
        <Apps className="navMenu_icons" />
        <Notifications className="navMenu_icons" />
        <Avatar src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p160x160/107542672_3068672666558069_5787317240187801863_n.jpg?_nc_cat=111&_nc_sid=7206a8&_nc_ohc=U2Iev6DZtk8AX-7XyzY&_nc_ht=scontent-dfw5-1.xx&tp=6&oh=0fe056c84fecc438f36bad08d625db51&oe=5F9CD9CC" />
      </div>
    </div>
  );
}

export default NavMenu;
