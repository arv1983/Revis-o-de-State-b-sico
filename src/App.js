import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      showH1: true,
      showDiv: true,
      showH2: true,
      showH3: true,
      showB: true,
    };
  }

  hideButton = () => {
    this.setState({ show: false });
  };

  showButton = () => {
    this.setState({ show: true });
  };

  hideH1 = () => {
    this.setState({ showH1: false });
  };

  showH1 = () => {
    this.setState({ showH1: true });
  };

  hideDiv = () => {
    this.setState({ showDiv: false });
  };

  showDiv = () => {
    this.setState({ showDiv: true });
  };

  hideH2 = () => {
    this.setState({ showH2: false });
  };

  showH2 = () => {
    this.setState({ showH2: true });
  };

  showH3 = () => {
    this.setState({ showH3: !this.state.showH3 });
  };

  showB = () => {
    this.setState({ showB: !this.state.showB });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {this.state.show && <p>Olá React!</p>}
        <button onClick={this.showButton}>Mostra React</button>
        <button onClick={this.hideButton}>Esconde React</button>

        {this.state.showH1 && <h1>Olá h1!</h1>}
        <button onClick={this.showH1}>Mostra H1</button>
        <button onClick={this.hideH1}>Esconde H1</button>

        {this.state.showDiv && <div>Olá Div!</div>}
        <button onClick={this.showDiv}>Mostra Div</button>
        <button onClick={this.hideDiv}>Esconde Div</button>

        {this.state.showH2 && <h2>Olá h2!</h2>}
        <button onClick={this.showH2}>Mostre H2</button>
        <button onClick={this.hideH2}>Esconde H2</button>

        {this.state.showH3 && <h3>Olá h3!</h3>}
        <button onClick={this.showH3}>Mostra/Esconde h3</button>

        {this.state.showB && <b>Olá b!</b>}
        <button onClick={this.showB}>Mostra/Esconde b</button>
      </div>
    );
  }
}

export default App;
