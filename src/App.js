import logo from './logo.svg';
import './App.css';
import BrandContainer from './components/BrandContainer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BrandDetails from './BrandDetails';
import NavBar from './components/NavBar';
import CountryContainer from './components/CountryContainer';
// import CountryForm from './CountryForm';
import CountryDetails from './constraints/CountryDetails';
import TeamDetails from './components/TeamDetails';


function App() {
  return (
    <Router>

    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <h2>Home Page</h2>
          </Route>
        <Route exact path="/brands">
      <BrandContainer />
      </Route>
      <Route exact path="/brands/:id">
        <BrandDetails />
        </Route>

        <Route exact path="/countries">
      <CountryContainer />
      </Route>
      
      
      <Route exact path="/countries/:id">
        <CountryDetails />
      </Route>

      {/* <Route exact path="/teams">
      <TeamContainer />
      </Route> */}

      <Route exact path="/teams/:id">
        <TeamDetails />
      </Route>


      </Switch>
    </div>
    </Router>
  )
}

export default App;
