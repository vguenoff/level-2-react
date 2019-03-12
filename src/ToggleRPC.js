import { Component } from "react";

export default class ToggleRPC extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState(state => ({
      on: !state.on
    }));
  };

  render() {
    const { children } = this.props;
    const { on } = this.state;
    const { toggle } = this;

    return children({ on, toggle });
  }
}
