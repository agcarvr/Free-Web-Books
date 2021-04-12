import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch, Link, useLocation, } from 'react-router-dom';
import Home from './Components/Home/Home';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import BookDetails from './Components/BookDetails/BookDetails';

export default function App () {
  const [ bookList , setBookList ] = useState([]);
  const [lastSearch, setLastSearch] = useState('');

  const currentLocation = useLocation();
  return (
    <div>
      <nav className="navBar">
        
        <Link to='/'>
          <h3 className="linkToHome">Back To Home</h3>
        </ Link>

        {currentLocation.pathname !== "/" &&
        <SearchBar
          setLastSearch={setLastSearch} 
          className="searchBar" 
          setBookList={setBookList}
        />
        }
      </nav>
      <main>
        <Switch>

          <Route exact path="/" render={() => {
            return <Home 
                    setLastSearch={setLastSearch} 
                    setBookList={setBookList}
                  />;
          }} >
          </Route>

          <Route path="/searchresults" render={() => {
            return <SearchResults 
                    bookList={bookList} 
                    lastSearch={lastSearch} 
                  />
          }}>
          </Route>

          <Route path="/bookdetails/:id" render={routerProps => {
            return <BookDetails 
                    routerProps={routerProps} 
                    bookList={bookList} 
                  />
          }} >
          </Route>

        </Switch>
      </main>
    </div>
  )
}
