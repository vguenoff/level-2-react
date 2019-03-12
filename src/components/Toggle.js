import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Toggle extends Component {
    static propTypes = {
        render: PropTypes.func.isRequired,
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
        const { render } = this.props;
        const { on } = this.state;
        const { toggle } = this;

        return <>{render({ on, toggle })}</>;
    }
}
