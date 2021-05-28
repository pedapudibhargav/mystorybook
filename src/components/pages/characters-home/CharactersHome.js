import React from "react";
import { Link } from "react-router-dom";
import adultPlaceholderImage from './image/superhero.svg';
import kidPlaceholderImage from './image/kid-superhero.svg';
import './CharactersHome.scss';

class CharactersHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "numOfAdults": "2",
      "numOfKids": "2",
      "adults": [
        {
          "name": "Bhargava Chary",
          "order": "0",
          "isAGifter": false,
          "isAReceiver": false
        },
        {
          "name": "Divya Vijayakumar",
          "order": "1",
          "isAGifter": false,
          "isAReceiver": false
        }
      ],
      "kids": [
        {
          "name": "Ichu",
          "order": "0",
          "isAGifter": false,
          "isAReceiver": false
        },
        {
          "name": "sriram",
          "order": "1",
          "isAGifter": false,
          "isAReceiver": false
        }
      ],
      "isGift": "true"
    }
  }

  render() {
    return (
      <div className="container">
        {/* breacrubm */}
        <div className="row">
          <div className="col-12">
            <nav arial-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item" aria-current="page">
                  <Link className='a' to="/">Home</Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  <Link className='a'>Start creating</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Characters Home
                </li>
              </ol>
            </nav>
          </div>
        </div>


        <div className="row row-cols-2 row-cols-md-4" id="character-row">
          {this.state.adults.map((adultIn, index) =>
            <div className="col mb-4" key={index}>
              <div className="card h-100">
                <img src={adultPlaceholderImage} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title">{adultIn.name}</h5>
                  <Link className='btn btn-secondary' to={"/create-a-book/pick-acharacter/adults/" + index}>Edit character</Link>
                </div>
              </div>
            </div>
          )}
          {this.state.kids.map((kidIn, index) =>
            <div className="col mb-4" key={index}>
              <div className="card h-100">
                <img src={kidPlaceholderImage} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title">{kidIn.name}</h5>
                  <Link className='btn btn-secondary' to="/create-a-book/pick-acharacter">Edit character</Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="row">
          <div className="col-12">
            <div className="btn btn-primary btn-block"> Create my book</div>
          </div>
        </div>
      </div>
    );
  }
}
export default CharactersHome;