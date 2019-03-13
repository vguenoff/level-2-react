import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const portalRoot = document.getElementById('portal');

export default class Portal extends Component {
    static propTypes = {
        children: PropTypes.objectOf(PropTypes.any),
    };

    static defaultProps = {
        children: [],
    };

    constructor() {
        super();

        this.el = document.createElement('div');
    }

    componentDidMount = () => {
        portalRoot.appendChild(this.el);
    };

    componentWillUnmount = () => {
        portalRoot.removeChild(this.el);
    };

    render() {
        const { children } = this.props;
        return ReactDOM.createPortal(children, this.el);
    }
}
