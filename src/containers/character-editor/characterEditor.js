/*
container to hold entire page editor container
*/

import React from 'react';
import './characterEditor.scss';
import ReactDOM from 'react-dom';
import CharDesignCPanel from '../../components/char-design-cpanel/charDesingCPanel'
import CanvasItemBean from '../../beans/CanvasItemBean';
import SvgComp from '../../components/svg/svg';

class CharacterEditor extends React.Component {

    constructor(props) {
        super(props);
        let item = new CanvasItemBean(
            <svg>
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
        this.state = { items: [item] };
    }



    render() {
        return (
            <div id="page-container">
                <div class="container-fluid">
                    <div class="row">
                        <div id="pc-contole-panel" class='col-4'>
                            <CharDesignCPanel></CharDesignCPanel>
                        </div>
                        <div id="pc-canvas-outer" class='col-8 p-0'>
                            <div id="pc-svg-wrap">
                                {/* <svg id="main-svg">
                                    <image x="10" y="20" width="80" height="80" href="https://www.flaticon.com/svg/vstatic/svg/892/892458.svg?token=exp=1620872672~hmac=f90430f3b78c02d2a9cc1bd2e0633a2e"></image>
                                </svg> */}

                                <svg id="main-svg">
                                    {this.state.items.map((item, index) =>
                                        <g key={index}>{item.svg}</g>
                                    )}
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterEditor;