/*
container to hold entire page editor container
*/

import React from 'react';

class SvgComp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <g>{this.props.contentIn}</g>
        );
    }
}

export default SvgComp;