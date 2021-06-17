import React, { Component } from "react";

class Modal extends Component {
 state = {};

 render() {
  return (
   <>
    <div className="Overlay" onClick={() => this.props.taggleModal("")}>
     <div className="Modal">
      <img src={this.props.largeImageURL} alt="pic" />
     </div>
    </div>
   </>
  );
 }
}

export default Modal;
