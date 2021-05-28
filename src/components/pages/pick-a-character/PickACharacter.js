import React from "react";
import { Link } from "react-router-dom";
import './PickACharacter.scss';
import { withRouter } from "react-router";
import placeholderImg from './image/ninja.svg';

class PickACharacter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            charType: this.props.match.params.charType,
            charOrder: this.props.match.params.charOrder,
            currentChar: {}
        }
    }

    render() {
        return (
            <div className="container" id="pick-a-character">
                <div className="row">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item" aria-current="page">
                                    <Link className='a' to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    <Link className='a' to="/create-a-book/characters">Start creating</Link>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">
                                    <Link className='a' to="/create-a-book/characters">Characters Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Pick a character</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-md-3">
                    <div class="col mb-4">
                        <div class="card h-100">
                            <img src={placeholderImg} class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card h-100">
                            <img src={placeholderImg} class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card h-100">
                            <img src={placeholderImg} class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card h-100">
                            <img src={placeholderImg} class="card-img-top" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(PickACharacter);