"use strict";

import React from "react";
import { ContextMenu, MenuItem } from "../../src";
import MenuTypes from "./constants";

const Menu2 = React.createClass({
    displayName: "Menu2",
    handleClick(e, data) {
        this.props.addLog(`Clicked on menu 2 ${data.item} on ${data.name}`);
    },
    render() {
        return (
            <ContextMenu identifier={MenuTypes.menu2}>
                <MenuItem onClick={this.handleClick} data={{item: "item 1"}}>Menu 2 Item 1</MenuItem>
                <MenuItem onClick={this.handleClick} data={{item: "item 2"}}>Menu 2 Item 2</MenuItem>
            </ContextMenu>
        );
    }
});

export default Menu2;
