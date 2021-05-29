import React from "react";
import { Link } from "react-router-dom";
import './CreateCharacter.scss';
import { withRouter } from "react-router";

class CreateCharacter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div id="create-character-container">
                <div className="left-panel">
                    <div className="level-1-nav">
                    </div>
                    <div className="level-2-nav"></div>
                    <div className="nav-option-container"></div>
                </div>
                <div className="right-panel">
                    <div className="char-canvas-container card-1">

                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(CreateCharacter);