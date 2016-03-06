"use strict";

import React from "react";
import classnames from "classnames";
import assign from "object-assign";
import monitor from "./monitor";

let { PropTypes } = React;

const MenuItem = React.createClass({
    displayName: "MenuItem",
    propTypes: {
        onClick: PropTypes.func.isRequired,
        data: PropTypes.object,
        disabled: PropTypes.bool,
        preventClose: PropTypes.bool
    },
    defaultProps: {
        disabled: false,
        data: {}
    },
    handleClick(event) {
        let { disabled, onClick, data, preventClose } = this.props;

        console.log(typeof onClick);

        event.preventDefault();

        if (disabled) return;

        assign(data, monitor.getItem());

        if (typeof onClick === "function") {
            onClick(event, data);
        }

        if (preventClose) return;

        monitor.hideMenu();
    },
    render() {
        let { disabled, children } = this.props;

        const classes = classnames({
            "react-context-menu-link": true,
            disabled
        });

        return (
            <div className="react-context-menu-item">
                <a href="#" classes={classes} onClick={this.handleClick}>
                    {children}
                </a>
            </div>
        );
    }
});

export default MenuItem;
