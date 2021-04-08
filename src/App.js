import './App.css';
import { useState } from 'react';
import { Route, Switch, Link, useLocation, } from 'react-router-dom';
import Home from './Components/Home/Home';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';

export default function App (props) {
  const [bookList , setBookList ] = useState([]);

  const currentLocation = useLocation();
  return (
    <div>
      <nav className="navBar">
        <Link to='/'>
          <h3>Back To Home</h3>
        </ Link>
        {currentLocation.pathname !== "/" &&
        <SearchBar setBookList={setBookList}/>
        }
      </nav>
      <main>
        <Switch>
          <Route exact path='/' render={routerProps => {
            return <Home {...routerProps} setBookList={setBookList}/>;
          }} >
          </Route>
          <Route path="/searchresults" render={routerProps => {
            return <SearchResults {...routerProps} bookList={bookList} />
          }}/>
        </Switch>
      </main>
    </div>
  )
}
