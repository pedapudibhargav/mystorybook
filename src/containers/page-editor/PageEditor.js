/*
container to hold entire page editor container
*/

import React from 'react';
import './pageEditor.scss';
import ReactDOM from 'react-dom';

class PageEditor extends React.Component {
    render() {
        return (
            <div id="page-container">
                <div class="container-fluid">
                    <div class="row">
                        <div id="pc-contole-panel" class='col-4'>
                            <p>this is left</p>
                        </div>
                        <div id="pc-canvas-outer" class='col-8 p-0'>
                            <div id="pc-svg-wrap">
                                <svg id="main-svg"></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageEditor;