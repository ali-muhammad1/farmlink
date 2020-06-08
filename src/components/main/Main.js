import React from "react";
import Navbar from "../../containers/navbar/Navbar";
import Sidebar from "../../containers/sidebar/Sidebar";
import "./main.css";

export function Main(props) {
  const { children } = props;

  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <div className="dashboard-outerwrap">{children}</div>
    </React.Fragment>
  );
}

export default Main;
