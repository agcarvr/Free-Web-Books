import './App.css';
import {useState} from 'react';
import { Route, Switch, Link, useLocation, Redirect } from 'react-router-dom';
import Home from './Components/Home/Home';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';

export default function App (props) {
  const currentLocation = useLocation();
  const [ isSearching , setIsSearching ] = useState(false);
  
  function handleSubmit(event) {
    event.preventDefault();
    setIsSearching(true);
  }
  
  return (
    <div>
      <nav>
        {currentLocation.pathname !== "/" &&
        <Link to='/other'>
          <SearchBar handleSubmit={handleSubmit}/>
        </Link>
        }
        <Link to='/'>
          <h3>Back To Home</h3>
        </ Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">{isSearching ? <Redirect to="/searchResults"/> : <Home/>}</Route>
          {/* <Route exact path='/' render={routerProps => {
            return <Home {...routerProps} handleSubmit={handleSubmit}/>;
          }} >
          </Route> */}
          <Route path="/searchresults" component={SearchResults}/>;
        </Switch>
      </main>
    </div>
  )
}
