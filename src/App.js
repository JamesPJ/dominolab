import React, { Component } from "react";
import Flexi from "./Flexi";
import "./App.css";
import flexiConfig from "./flexiConfig.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {};
  }

  submitForm(values) {
    this.setState(values);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-12 text-center">
              <h1>Domino Lab demo</h1>
            </div>
            <div className="col col-8">
              <h2>Flexi Form</h2>
              <Flexi onSubmit={this.submitForm} config={flexiConfig.items} />
            </div>
            {Object.keys(this.state).length ? (
              <div className="col col-4">
                <h2>Flexi form output</h2>
                <pre>{JSON.stringify(this.state, "", 4)}</pre>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
