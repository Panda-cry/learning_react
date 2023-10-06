import React from "react";
import ReactDOM from "react-dom";
const Backdrop = (props) => {
  return <div />;
};

const ModalOverlay = (porps) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="overlay">
        <div className="overlay-content">{porps.children}</div>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
}

export default Modal;
