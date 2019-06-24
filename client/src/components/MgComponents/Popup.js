import React, { Component } from "react";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStateChanged: false,
      isOpen: props.isOpen
    };
  }
  // componentDidMount() {
  //   document.addEventListener("click", () => {
  //     console.log("popup  click");
  //   });
  //   // window.onclick = this.windowClickListners;
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== this.state.isOpen) {
      let popup = document.getElementById(this.props.id);
      if (nextProps.isOpen) {
        let target = document.getElementById("nave-user-profile");
        popup.style.top = target.offsetTop + target.offsetHeight + 5 + "px";
        popup.style.right =
          window.innerWidth - (target.offsetLeft + target.offsetWidth) + "px";
        popup.style.display = "block";
        document.addEventListener("click", this.popupWindowClick);
        this.setState({ isOpen: nextProps.isOpen, isStateChanged: true });
        //   return { isOpen: nextProps.isOpen, isStateChanged: true };
      } else {
        popup.style.display = "none";
        document.removeEventListener("click");
      }
    }
  }

  windowClickListners = event => {
    let modal = document.getElementById(this.props.id);
    if (
      event.target.id !== this.props.id &&
      event.target.id !== this.props.targetId &&
      this.state.isOpen &&
      !this.state.isStateChanged
    ) {
      // this.setState({ isOpen: false, isFromState: true });
      let popup = document.getElementById(this.props.id);
      popup.style.display = "none";
      this.setState({ isOpen: false });
    } else {
      this.setState({ isStateChanged: false });
    }
  };

  popupWindowClick = () => {
    let popup = document.getElementById(this.props.id);

    console.log("popup  click");
    popup.style.display = "none";
    this.setState({ isOpen: false, isStateChanged: true });
    document.removeEventListener("click", this.popupWindowClick);
  };

  onClickComponent = event => {};
  render() {
    return (
      <div
        class="mg-popup"
        id={this.props.id}
        style={{ top: 10 }}
        onClick={event => this.onClickComponent}
      >
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Popup;
