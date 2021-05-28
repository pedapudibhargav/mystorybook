import React from "react";
import { Link } from "react-router-dom";
import adultPlaceholderImage from './image/superhero.svg';
import './CharactersHome.scss';

class CharactersHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        {/* breacrubm */}
        <div className="row">
          <div className="col-12">
            <nav arial-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">Home</li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link className='a'>Characters</Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>


        <div className="row row-cols-1 row-cols-md-3" id="character-row">
          <div className="col mb-4">
            <div className="card h-100">
              <img src={adultPlaceholderImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default CharactersHome;