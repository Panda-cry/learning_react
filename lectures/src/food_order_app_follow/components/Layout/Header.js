import React from "react";
import foodTable from "../../../assets/images.jpeg";
import HeaderButton from "./HeaderButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <h1 className="col">Food app</h1>

          <HeaderButton onClick={props.onShowCart} />
        </div>
      </header>
      {
        <div>
          <img
            src={foodTable}
            className="rounded mx-auto d-block"
            alt="Responsive image"
          />
        </div>
      }
    </React.Fragment>
  );
};

export default Header;
