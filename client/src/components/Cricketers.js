import React, { Component } from "react";
import "./cricketers.css";

class Cricketers extends Component {
  constructor() {
    super();
    this.state = {
      cricketers: [],
    };
  }

  componentDidMount() {
    fetch("/api/cricketers")
      .then((res) => res.json())
      .then((cricketers) =>
        this.setState({ cricketers }, () =>
          console.log("Cricketers fetched...", cricketers)
        )
      );
  }

  render() {
    return (
      <div>
        <h2>Cricketers</h2>
        <ul>
          {this.state.cricketers.map((cricketer) => (
            <li key={cricketer.id}>
              {cricketer.firstName} {cricketer.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cricketers;
