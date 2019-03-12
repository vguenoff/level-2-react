import React, { Component } from "react";

export default class Toggle extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState(state => ({
      on: !state.on
    }));
  };

  render() {
    const { render } = this.props;
    const { on } = this.state;
    const { toggle } = this;

    return <>{render({ on, toggle })}</>;
  }
}
