import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      claps: 0,
      currentSmiley: '-'
    };
  }

  imperativeSetClaps(prevProps, prevState) {
    const none = "😐",
      medium = "😊",
      high = "😄";

    if (this.state.claps > 10) {
      this.setState({ currentSmiley: high });
    } else if (this.state.claps > 5) {
      this.setState({ currentSmiley: medium });
    } else {
      this.setState({ currentSmiley: none });
    }
  }

  functionalSetClaps(prevState) {
    const clapStates = [
      {minClap: 10, currentSmiley:"😄"},
      {minClap: 5, currentSmiley:"😊"},
      {minClap: 0, currentSmiley:"😐"},
    ]

    const match = clapStates.find( st => this.state.claps >= st.minClap)  
    this.setState({currentSmiley: match.currentSmiley})
  }

  // Functional setsmiley
  componentDidUpdate(prevProps, prevState) {
    if (this.state.claps != prevState.claps) {
      this.functionalSetClaps(prevState)
    // this.imperativeSetClaps(prevState)
    }
  }


  clapClicked = () => {
    this.setState(prevState => {
      return {
        claps: prevState.claps + 1
      };
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.currentSmiley}
        <div className="ClapContainer">
          Claps:
          <div>{this.state.claps}</div>
        </div>
        <button onClick={this.clapClicked}>Clap!</button>
      </div>
    );
  }
}

export default App;
