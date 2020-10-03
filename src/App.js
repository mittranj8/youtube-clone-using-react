import React from "react";
import "./App.css";
import NavMenu from "./NavMenu";
import RecVideos from "./RecVideos";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="app">
      <NavMenu />
      <div className="app_page">
        <SideBar />
        <RecVideos />
      </div>
    </div>
  );
}

export default App;
