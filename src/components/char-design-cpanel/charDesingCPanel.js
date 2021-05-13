/*
container to hold entire page editor container
*/

import React from 'react';
import './charDesignCPanel.scss';
import ReactDOM from 'react-dom';
import CharDesignCpanelItemBean from '../../beans/CharDesignCpanelItemBean';
import CharDesignCpanelItem from '../cdesign-cpanel-item/CdesingCPanelItem';

class CharDesignCPanel extends React.Component {
    constructor(props) {
        super(props);
        let itemA  = new CharDesignCpanelItemBean();
        let itemB = new CharDesignCpanelItemBean();
        let itemList = [itemA, itemB]
        this.state = { itemList: itemList };
    }

    render() {
        const listItems = this.state.itemList.map((cpanelItem, index) =>
        // Correct! Key should be specified inside the array.
        <CharDesignCpanelItem key={index} svgStr={cpanelItem.svg} />
      );

        return (
            <div id="char-design-cpanel">
                {listItems}
            </div>
        );
    }
}

export default CharDesignCPanel;