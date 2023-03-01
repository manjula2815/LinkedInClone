import React from "react";
import "./HeaderOption.css";

export default function HeaderOption({ title, Icon }) {
  return (
    <div className="header_option">
      {Icon && <Icon className="header_icon" />}
      <div className="header_option_title">{title}</div>
    </div>
  );
}
