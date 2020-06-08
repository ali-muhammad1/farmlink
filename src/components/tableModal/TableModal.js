import React, { useState } from "react";
import "./tableModal.css";

const TableModal = (props) => {
  const { handleSubmit, section, column } = props;
  const [columnName, setColumnName] = useState("");
  const [data, setData] = useState({
    commodityDes: "",
    year: "",
    attributeDes: "",
    coutryName: "",
    value: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleColumnChange = (event) => {
    setColumnName(event.target.value);
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (section === "addRow" && data.commodityDes !== "" && data.year !== "") {
      handleSubmit(data);
    } else if (columnName !== "") {
      handleSubmit(columnName);
    }
    setData({
      commodityDes: "",
      year: "",
      attributeDes: "",
      coutryName: "",
      value: "",
    });
    setColumnName("");
  };

  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              {section === "addRow" ? "Add Row" : "Add Column"}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="farm-popup-outerwrap">
            {section === "addRow" ? (
              <form>
                <div className="form-inner-wrap">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Commodity Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      name="commodityDes"
                      value={data.commodityDes}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter Commodity Description"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Market Year</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      name="year"
                      value={data.year}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter Market Year"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      Attribute Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="attributeDes"
                      id="exampleInputEmail1"
                      value={data.attributeDes}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter Attribute Description"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Country Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="coutryName"
                      value={data.coutryName}
                      onChange={(e) => handleChange(e)}
                      id="exampleInputEmail1"
                      placeholder="Enter Country Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Value</label>
                    <input
                      type="text"
                      name="value"
                      value={data.value}
                      onChange={(e) => handleChange(e)}
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Value"
                      required
                    />
                  </div>
                  {column.map((name, index) => {
                    return (
                      <div className="form-group" key={index}>
                        <label htmlFor="exampleInputEmail1">{name}</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          name={name}
                          value={data[name]}
                          onChange={(e) => handleChange(e)}
                          placeholder={`Enter ${name}`}
                          required
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSave}
                  >
                    Save changes
                  </button>
                </div>
              </form>
            ) : (
              <form>
                <div className="form-inner-wrap">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Column Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      name="columnName"
                      value={columnName}
                      onChange={(e) => handleColumnChange(e)}
                      placeholder="Enter Column Name"
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSave}
                  >
                    Save changes
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableModal;
