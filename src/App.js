
import React from "react";
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CharactersHome from './components/pages/characters-home/CharactersHome';
import OpenCreationFlow from './components/pages/open-creation-flow/OpenCreationFlow';
import PickACharacter from "./components/pages/pick-a-character/PickACharacter";
import CreateCharacter from "./components/pages/create-character/CreateCharacter";

class App extends React.Component {
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
    this.handleRootStateChange = this.handleRootStateChange.bind(this);
  }

  handleRootStateChange(stateFromChildComp) {
    this.setState(stateFromChildComp);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body className="App-body">

          <Router>
            <Switch>
              <Route path="/create-a-book/pick-acharacter/:charType/:charOrder">
                <PickACharacter></PickACharacter>
              </Route>
              <Route path="/create-a-book/create-character/:charType/:charOrder">
                <CreateCharacter></CreateCharacter>
              </Route>
              <Route path="/create-a-book/characters">
                <CharactersHome></CharactersHome>
              </Route>
              <Route path="/create-a-book">
                <OpenCreationFlow rootState={this.state} onUpdateRootState={this.handleRootStateChange}></OpenCreationFlow>
              </Route>
              <Route path="/">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <Link className="btn btn-primary mt-2" to="/create-a-book"> Start your book</Link>
                    </div>
                  </div>
                </div>
                <p> {'this is the state:' + JSON.stringify(this.state)}</p>
              </Route>
            </Switch>
          </Router>
        </body>
      </div>);
  }
}
export default App;
