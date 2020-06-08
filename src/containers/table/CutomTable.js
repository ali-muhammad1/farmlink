import React, { Component } from "react";
import { tableData } from "../../utils/constants";
import { TinyPagination } from "tiny-custom-pagination";
import TableModal from "../../components/tableModal/TableModal";
import "./tableStyle.css";

class CutomTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPageId: 1,
      products: tableData,
      addButton: false,
      openModal: false,
      section: "",
      column: [],
      search: null,
    };
  }

  changePage = (id) => {
    this.setState((prevState, props) => {
      return {
        ...prevState,
        selectedPageId: id,
      };
    });
  };

  buttonPageClick = (id) => {
    let { selectedPageId } = this.state;
    switch (id) {
      case "PRE":
        this.changePage(selectedPageId - 1);
        break;
      case "NEXT":
        this.changePage(selectedPageId + 1);
        break;
      default:
        this.changePage(id);
        break;
    }
  };

  renderBtnNumber = (id) => {
    let { selectedPageId } = this.state;
    return (
      <button
        onClick={this.buttonPageClick.bind(this, id)}
        key={id}
        className={`page ${selectedPageId === id ? "selected-page" : ""}`}
      >
        {id}
      </button>
    );
  };

  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber });
  };

  handleAddSection = (section) => {
    this.setState({ openModal: true, section });
  };

  closeModal = () => {
    this.setState({ openModal: false });
  };

  handleSubmit = (data) => {
    if (this.state.section === "addColumn") {
      var joined = this.state.column.concat(data);
      this.setState({ column: joined });
    } else {
      let newObject = {
        Commodity_Description: data.commodityDes,
        Market_Year: data.year,
        Attribute_Description: data.attributeDes,
        Country_Name: data.coutryName,
        Value: data.value,
      };
      this.state.column.forEach((name) => {
        newObject[name] = name;
      });

      let newArr = [...this.state.products];
      newArr.splice(0, 0, newObject);
      this.setState({
        products: newArr,
      });
    }
  };

  searchHandler = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    let { selectedPageId, products, column, search } = this.state;
    const itemPerPage = 10;
    const maxBtnNumbers = 8;

    const productsData = products.filter((data) => {
      if (search == null) return data;
      else if (
        data.Commodity_Description.toLowerCase().includes(
          search.toLowerCase()
        ) ||
        data.Market_Year.toLowerCase().includes(search.toLowerCase()) ||
        data.Country_Name.toLowerCase().includes(search.toLowerCase())
      ) {
        return data;
      }
    });
    let listShow = [...productsData];
    listShow = listShow.splice((selectedPageId - 1) * itemPerPage, itemPerPage);
    return (
      <div className="analyst-view">
        <div className="analyst-view-heading">
          <h3>Analyst View</h3>
          <div className="analyst-view-heading-img">
            <a
              href="#/"
              onClick={() => {
                this.setState({ addButton: !this.state.addButton });
              }}
            >
              <img src="images/Add-new-service.png" alt="" />
            </a>
          </div>
          <div
            id="add-row-column"
            className={this.state.addButton ? "add-section" : ""}
          >
            <h3
              onClick={() => this.handleAddSection("addColumn")}
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Add Column
            </h3>
            <h3
              onClick={() => this.handleAddSection("addRow")}
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Add Row
            </h3>
          </div>
        </div>
        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback"></span>
          <input
            type="text"
            className="form-control"
            onChange={this.searchHandler}
            placeholder="Search"
          />
        </div>
        <div className="analyst-table">
          <table className="table  table-striped">
            <thead>
              <tr>
                <th scope="col">Commodity Description</th>
                <th scope="col">Market Year</th>
                <th scope="col">Attribute Description</th>
                <th scope="col">Country Name</th>
                <th scope="col">Value</th>
                {column.length > 0 &&
                  column.map((name, index) => {
                    return (
                      <th scope="col" key={index}>
                        {name}
                      </th>
                    );
                  })}
              </tr>
            </thead>
            <tbody>
              {listShow.length > 0 ? (
                listShow.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.Commodity_Description}</td>
                      <td>{data.Market_Year}</td>
                      <td>{data.Attribute_Description}</td>
                      <td>{data.Country_Name}</td>
                      <td>{data.Value}</td>
                      {column.length > 0 &&
                        column.map((name, index) => {
                          return <td key={index}>{data[name]}</td>;
                        })}
                    </tr>
                  );
                })
              ) : (
                <h1 className="empty-data">No Record Found...</h1>
              )}
            </tbody>
          </table>
        </div>
        <TinyPagination
          total={productsData.length}
          selectedPageId={selectedPageId}
          itemPerPage={itemPerPage}
          renderBtnNumber={this.renderBtnNumber}
          maxBtnNumbers={maxBtnNumbers}
          preKey="PRE"
          nextKey="NEXT"
          wrapClass="page-container"
          btnsClass="btns-container"
          counterClass="counter-container"
          counterStyle={{ color: "gray" }}
          spreadClass="spread-container"
          spreadStyle={{ padding: "0 5px" }}
        />
        <TableModal
          handleSubmit={this.handleSubmit}
          section={this.state.section}
          column={column}
        />
      </div>
    );
  }
}

export default CutomTable;
