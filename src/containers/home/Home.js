import React from "react";
import Chart from "../../components/chart/Chart";
import LineChart from "../../components/lineChart/LineChart";
import { barsData } from "../../utils/constants";
import CustomTable from "../table/CutomTable";
import ChatBox from "../chatBox/ChatBox";
import "./home.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
      lineChartData: {},
    };
  }

  componentWillMount() {
    this.setState({
      chartData: {
        labels: barsData.labels,
        datasets: [
          {
            label: "Canola stocks",
            data: barsData.data,
            backgroundColor: "rgba(54, 162, 235, 0.6)",
          },
        ],
      },
      lineChartData: {
        labels: barsData.labels,
        datasets: [
          {
            label: "Canola stocks",
            data: barsData.lineData,
            fill: false,
            backgroundColor: "rgba(54, 162, 235, 0.6)",
          },
        ],
      },
    });
  }

  render() {
    return (
      <div className="row body-outerwrap">
        <div className="col-xl-7 body-innerwrap">
          <div className="commodity-updates">
            <div className="commodity-updates-heading">
              <h3>commodity updates</h3>
              <div className="commodity-updates-heading-img">
                <a href="#/">
                  <img src="images/Gear_icon.png" alt="" />
                </a>
              </div>
            </div>
            <Chart chartData={this.state.chartData} />
          </div>
          <div className="commodity-updates">
            <div className="commodity-updates-heading">
              <h3>commodity updates</h3>
              <div className="commodity-updates-heading-img">
                <a href="#/">
                  <img src="images/Gear_icon.png" alt="" />
                </a>
              </div>
            </div>
            <LineChart chartData={this.state.lineChartData} />
          </div>
        </div>

        <div className="col-xl-5 body-innerwrap2">
          <div className="notification">
            <h3>notifications</h3>
            <ul>
              <li>
                Daily wires: <span>5 unread reports</span>
              </li>
              <li>
                Users:
                <span className="user-span">Petrus invited a new users</span>
              </li>
            </ul>
          </div>

          <div className="commodity-production">
            <h3>Commodity Production</h3>
            <div className="commodity-production-innerwrap">
              <div className="commodity-production-img">
                <img src="images/Rectangle 4.png" alt="" />
              </div>
              <div className="commodity-outerwrap">
                <div className="bushel-prize">
                  <h4>Price per bushel</h4>
                  <div className="bushel-arrow">
                    <img src="images/up-arrow.png" alt="" />
                  </div>
                  <span>10%</span>
                </div>
                <div className="supply-prize">
                  <h4>Supply</h4>

                  <div className="supply-arrow">
                    <img src="images/down-arrow.png" alt="" />
                  </div>
                  <span>15%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="customer-response">
            <h3>How many acres of soy are you harvesting this month</h3>
            <div className="form-group">
              <input type="text" placeholder="Respond to farmbot" />
              <button className="send-btn">
                <img src="images/send.png" alt="" />
              </button>
            </div>
          </div>
        </div>
        <CustomTable />
        <ChatBox />
      </div>
    );
  }
}

export default Home;
