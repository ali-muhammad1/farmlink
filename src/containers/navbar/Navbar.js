import React from "react";
import "./navbar.css";

export class Navbar extends React.Component {
  render() {
    return (
      <header className="dashboard-header">
        <div className="header-inner">
          <div className="row justify-content-between">
            <div className="dashboard-header-logo">
              <a href="#">
                <img src="images/logo-1.png" alt="" />
              </a>
            </div>
            <div className="dashboard-header-logout-btn">
              <div className="logout-btn">
                <img className="logoutbtn-img" src="images/icon.png" alt="" />
                <a href="#">log out</a>
              </div>
              <div className="header-customer">
                <div className="customer-img">
                  <img src="images/Image 2.png" alt="" />
                </div>
                <a href="#">john doe</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
