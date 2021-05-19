/*
container to hold entire page editor container
*/

import React from 'react';
import './CpanelL1Menu.scss';
import ReactDOM from 'react-dom';
import SvgComp from '../../components/svg/svg';

class CpanelL1Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="l1-menu">
                <div class="l1-menu-item">
                    <span class="material-icons-outlined">face</span>
                    <label>Face</label>
                </div>
            </div>
        );
    }
}

export default CpanelL1Menu;