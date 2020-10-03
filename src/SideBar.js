import React from "react";
import "./SideBar.css";
import SideBarRow from "./SideBarRow";
import {
  ExpandMoreOutlined,
  History,
  Home,
  OndemandVideo,
  Subscriptions,
  ThumbUpAltOutlined,
  VideoLibrary,
  WatchLater,
  Whatshot,
} from "@material-ui/icons";

export default function SideBar() {
  return (
    <div className="sideBar">
      <h1>This is SideBar</h1>

      <SideBarRow selected Icon={Home} title="Home" />
      <SideBarRow Icon={Whatshot} title="Trending" />
      <SideBarRow Icon={Subscriptions} title="Subscription" />

      <hr />

      <SideBarRow Icon={VideoLibrary} title="Library" />
      <SideBarRow Icon={History} title="History" />
      <SideBarRow Icon={OndemandVideo} title="Your Videos" />
      <SideBarRow Icon={WatchLater} title="Watch Later" />
      <SideBarRow Icon={ThumbUpAltOutlined} title="Liked Videos" />
      <SideBarRow Icon={ExpandMoreOutlined} title="Show More" />
    </div>
  );
}
