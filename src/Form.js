import React from "react";

//move it to LOGO via Navbar + add logo Papaplu 

export default function Form() {
  return (
    <div className="Form" className="LOGO">
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="🔍 ..."
              className="form-control"
              id="city-input"
              autoComplete="off"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-success w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
