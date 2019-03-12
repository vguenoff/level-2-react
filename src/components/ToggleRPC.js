import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ToggleRPC extends Component {
    static propTypes = {
        children: PropTypes.func.isRequired,
    };

    state = {
        on: false,
    };

    toggle = () => {
        this.setState(state => ({
            on: !state.on,
        }));
    };

    render() {
        const { children } = this.props;
        const { on } = this.state;
        const { toggle } = this;

        return children({ on, toggle });
    }
}
