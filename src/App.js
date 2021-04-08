import './App.css';
import {useState} from 'react';
import { Route, Switch, Link, useLocation, Redirect } from 'react-router-dom';
import Home from './Components/Home/Home';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';

export default function App (props) {
  const currentLocation = useLocation();
  return (
    <div>
      <nav>
        {currentLocation.pathname !== "/" &&
        <Link to='/other'>
          <SearchBar/>
        </Link>
        }
        <Link to='/'>
          <h3>Back To Home</h3>
        </ Link>
        <Link to="/searchresults">Search results</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path='/' render={routerProps => {
            return <Home {...routerProps}/>;
          }} >
          </Route>
          <Route path="/searchresults" component={SearchResults}/>
        </Switch>
      </main>
    </div>
  )
}
