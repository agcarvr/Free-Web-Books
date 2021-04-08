import { Link } from 'react-router-dom';
import {useState} from 'react';
import {Redirect} from 'react-router-dom';

export default function SearchBar(props){
    const [ isSearching , setIsSearching ] = useState(false);
    function handleSubmit(event) {
        event.preventDefault();
        setIsSearching(true);
      }
    return (
        <div>
            {isSearching && <Redirect to="/searchresults"/>}
            <form onSubmit={handleSubmit} className="searchBar">
                <input
                    placeholder="Search For Books"
                    type="text"
                    name="bookSearchString"
                    required
                // onChange={handleChange}
                // value=''
                />
                <button type="submit">Find Free Books</button>
            </form>
        </div>
      )
}