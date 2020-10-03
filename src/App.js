import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavMenu from "./NavMenu";
import RecVideos from "./RecVideos";
import SearchPage from "./SearchPage";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="app">
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <SideBar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <SideBar />
              <RecVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
