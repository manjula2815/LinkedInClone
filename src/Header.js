import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import {
  Home,
  Message,
  NotificationImportant,
  SupervisorAccount,
  Work,
} from "@mui/icons-material";

export default function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://img.icons8.com/color/48/null/linkedin-circled--v1.png"
          alt="linkedInIcon"
        />
        <div className="header_search">
          <SearchIcon />
          <input type="text" name="" id="" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption title={"home"} Icon={Home} />
        <HeaderOption title={"mynetwork"} Icon={SupervisorAccount} />

        <HeaderOption Icon={Work} title={"Jobs"} />
        <HeaderOption Icon={Message} title={"Messages"} />
        <HeaderOption Icon={NotificationImportant} title={"My Notifications"} />
      </div>
    </div>
  );
}
