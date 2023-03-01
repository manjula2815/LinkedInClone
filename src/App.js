import React from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="App">
      {/* {header} */}
      <Header />

      {/* {Appbody} */}
      <div className="App_Body">
        {/* {sidebar} */}
        <SideBar />
        {/* {feed} */}
        {/* {widgets} */}
      </div>
    </div>
  );
}

export default App;
