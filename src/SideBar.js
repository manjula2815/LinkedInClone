import { Avatar } from "@mui/material";
import React from "react";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://pbs.twimg.com/media/ER0AQagU8AAUjHM.jpg"
          alt="background"
        />
        <Avatar src="" className="sidebar_avatar" />
        <h2>Manjula</h2>
        <h4>manjuladhandapani07@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statnum">2342</p>
        </div>
        <div className="sidebar_stat">
          <p>Views onpost</p>
          <p className="sidebar_statnum">766632</p>
        </div>
      </div>
    </div>
  );
}
