import React from "react";
import "./sidebar.css";

export class Sidebar extends React.Component {
  state = {
    sidebarIcon: false,
  };
  render() {
    return (
      <div
        className={`dashboard-sidebar ${this.state.sidebarIcon &&
          "sidebarShow"}`}
      >
        <ul>
          <li>
            <div className="dashboard-dropdown-img">
              <img src="images/Group 3.png" alt="" />
            </div>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <div className="bids-icon">
              <img src="images/5.png" alt="" />
            </div>
            <div className="dropdown show">
              <a
                className="btn btn-secondary dropdown-toggle"
                href="/#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Bids
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a
                  className="btn btn-secondary dropdown-toggle"
                  href="#/"
                  role="button"
                  id="dropdownMenuLink2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="images/dash-icon.png" alt="" />
                  Subscriber
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink2"
                >
                  <a className="dropdown-item" href="#/">
                    <img src="images/dash-icon.png" alt="" />
                    Risk Tolerance
                  </a>
                  <a className="dropdown-item" href="#/">
                    <img src="images/dash-icon.png" alt="" />
                    Commodity Production
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <button
          className="sidebar-btn d-block d-lg-none"
          onClick={() =>
            this.setState({ sidebarIcon: !this.state.sidebarIcon })
          }
        >
          {this.state.sidebarIcon === true ? (
            <i className="fa fa-angle-left" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          )}
        </button>
      </div>
    );
  }
}

export default Sidebar;
