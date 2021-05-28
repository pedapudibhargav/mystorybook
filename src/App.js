
import './App.scss';
import OpenCreationFlow from './components/pages/open-creation-flow/OpenCreationFlow';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CharactersHome from './components/pages/characters-home/CharactersHome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body className="App-body">

        <Router>
          <Switch>
            <Route path="/create-a-book/characters">
              <CharactersHome></CharactersHome>
            </Route>
            <Route path="/create-a-book">
              <OpenCreationFlow></OpenCreationFlow>
            </Route>
            <Route path="/">
              <p>defalut view</p>
            </Route>
          </Switch>
        </Router>
      </body>
    </div>
  );
}

export default App;
