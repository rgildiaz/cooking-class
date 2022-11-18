import Mockup1 from "./Mockup1";
import Mockup2 from "./Mockup2";
import React from "react";

// TODO
// Mobile horizontal css
// Hamburger menu animation
// Hamburger menu functionality
// Join section
// Footer

const buttonStyles = {
  position: "fixed",
  bottom: "10px",
  left: "10px",
  zIndex: "100",
};

const totalMockups = 2;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mockupNum: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const mockupNum = this.state.mockupNum;
    if (mockupNum >= totalMockups) {
      this.setState({ mockupNum: 1 });
    } else {
      this.setState({ mockupNum: mockupNum + 1 });
    }

    this.renderMain();
  }

  renderButton() {
    return (
      <button style={{ ...buttonStyles }} onClick={this.handleClick}>
        {"Mockup " + this.state.mockupNum}
      </button>
    );
  }

  renderMain() {
    switch (this.state.mockupNum) {
      case 1:
        return <Mockup1 />;
      case 2:
        return <Mockup2 />;
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderButton()}
        {this.renderMain()}
      </div>
    );
  }
}

export default App;
