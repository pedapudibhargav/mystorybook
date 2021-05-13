/*
This is for items inide charecter design control panel. For example legs, eyes etc..
*/

import React from 'react';
import './cdesign-cpanel-item.scss';
import ReactDOM from 'react-dom';

class CharDesignCPanelItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="cdesign-cpanel-item">
                {this.props.svgStr}
            </div>
        );
    }
}

export default CharDesignCPanelItem;