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
        let itemA = new CharDesignCpanelItemBean(
            <svg version="1.1" id="Capa_1" x="0px" y="0px" width="100" height="100"
                viewBox="0 0 512.081 512.081" >
                <path style={{ fill: '#03A9F4' }} d="M443.966,45.03C409.641,18.044,336.19,1.062,333.075,0.358c-5.744-1.308-11.461,2.288-12.768,8.032
c-0.176,0.773-0.265,1.564-0.266,2.357c0,14.4-29.547,32-64,32s-64-17.6-64-32c0.002-3.246-1.474-6.316-4.011-8.341
c-2.508-2.085-5.848-2.875-9.024-2.133c-3.115,0.704-76.544,17.707-110.933,44.672C32.553,72.977,22.441,208.06,21.374,223.356
c-0.292,4.347,2.09,8.435,6.016,10.325c25.062,11.606,51.856,19.028,79.317,21.973v224.427c0.007,3.944,2.189,7.562,5.675,9.408
c1.728,0.939,43.605,22.592,143.659,22.592s141.931-21.653,143.659-22.592c3.485-1.846,5.668-5.464,5.675-9.408V255.654
c27.454-2.947,54.24-10.37,79.296-21.973c3.934-1.884,6.325-5.973,6.037-10.325C489.641,208.06,479.529,72.977,443.966,45.03z"/>
                <g>
                    <path style={{ fill: '#0288D1' }} d="M117.374,256.081c-5.891,0-10.667-4.776-10.667-10.667v-64c0.872-20.389-5.591-40.416-18.219-56.448
c-4.092-4.237-3.975-10.99,0.262-15.083c4.134-3.992,10.687-3.992,14.82,0c16.815,19.944,25.545,45.466,24.469,71.531v64
C128.041,251.305,123.265,256.081,117.374,256.081z"/>
                    <path style={{ fill: '#0288D1' }} d="M394.707,256.081c-5.891,0-10.667-4.776-10.667-10.667v-64
c-1.087-26.069,7.636-51.599,24.448-71.552c4.093-4.237,10.845-4.355,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083
c-0.086,0.089-0.173,0.176-0.262,0.262c-12.625,16.041-19.081,36.076-18.197,56.469v64
C405.374,251.305,400.598,256.081,394.707,256.081z"/>
                </g>
                <path style={{ fill: '#1976D2' }} d="M337.491,2.534c-2.437-2.044-5.668-2.875-8.789-2.261C304.7,5.14,280.44,8.637,256.041,10.748
c-24.4-2.11-48.659-5.607-72.661-10.475c-3.121-0.611-6.351,0.22-8.789,2.261c-2.454,2.022-3.877,5.034-3.883,8.213
c0,32,44.117,53.333,85.333,53.333s85.333-21.333,85.333-53.333C341.369,7.568,339.945,4.556,337.491,2.534z"/>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
        );
        let itemB = new CharDesignCpanelItemBean(
            <svg height="512" viewBox="0 0 512 512" width="100" height="100">
                <path d="m360 72h-104-104l-8 416h80l32-320 32 320h80z" fill="#d49073" />
                <g style={{ fill: '#c48669' }}>
                    <path d="m152 72h48c-4.81 38.46-29.84 50.92-49.05 54.74z" />
                    <path d="m361.05 126.74c-19.21-3.82-44.24-16.28-49.05-54.74h48z" />
                    <path d="m152 24h208v48h-208z" />
                    <path d="m256 72h32a0 0 0 0 1 0 0v80a16 16 0 0 1 -16 16h-16a0 0 0 0 1 0 0v-96a0 0 0 0 1 0 0z" />
                </g>
                <path d="m360 16h-208a8 8 0 0 0 -8 8v47.948l-8 415.9a8 8 0 0 0 8 8.152h80a8 8 0 0 0 7.96-7.2l24.04-240.4 24.04 240.4a8 8 0 0 0 7.96 7.2h80a8 8 0 0 0 8-8.154l-8-415.9v-47.946a8 8 0 0 0 -8-8zm-96 64h16v72a8.009 8.009 0 0 1 -8 8h-8zm24-16h-48v-32h80v32zm-128.153 16h30.574c-4.412 18.074-14.891 30.193-31.27 36.18zm32.153-16v-32h32v32zm160.153 16 .7 36.18c-16.379-5.987-26.858-18.106-31.27-36.18zm-.153-16h-16v-32h16zm-192-32h16v32h-16zm56.76 448h-64.6l6.672-346.943c17.333-4.932 40.988-18.088 47.964-53.057h41.204v87.6zm78.48 0-30.4-304h7.16a24.027 24.027 0 0 0 24-24v-72h9.209c6.976 34.969 30.631 48.125 47.964 53.057l6.672 346.943z" />
            </svg>
        );
        let itemList = [itemA, itemB]
        this.state = { itemList: itemList };

        // this.handleItemClick = this
        // .handleItemClick
        // .bind(this);
    }
    handleItemClick (capanelItemIn) {
        // console.log('The link was clicked.\n',svgIn);
        this.props.onCpanelItemClick(capanelItemIn)
    }

    
    render() {
        const listItems = this.state.itemList.map((cpanelItem, index) =>
            <div onClick={() => this.handleItemClick(cpanelItem)}><CharDesignCpanelItem key={index} svgStr={cpanelItem.svg}  /></div>
        );

        return (
            <div id="char-design-cpanel" class="p-0">
                <div id="cdesing-menu-l1">L1 menu</div>
                <div id="cdesing-menu-l2">{listItems}</div>
            </div>
        );
    }
}

export default CharDesignCPanel;