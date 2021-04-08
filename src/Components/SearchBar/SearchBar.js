import {useState} from 'react';
import {Redirect} from 'react-router-dom';

export default function SearchBar(props){
    const [ isSearching , setIsSearching ] = useState(false);
    const [searchString, setSearchString] = useState('');

    const getBooks = async (bookSearchString) => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const url = `https://www.googleapis.com/books/v1/volumes?q=${bookSearchString}&filter=full&key=${apiKey}`
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        props.setBookList(data.items);
     }

    function handleSubmit(event) {
        event.preventDefault();
        setIsSearching(true);
        getBooks(searchString);
    }
    
    function handleChange(event) {
        event.preventDefault();
        setSearchString(event.target.value);
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
                    onChange={handleChange}
                    value={searchString}
                />
                <button type="submit">Find Free Books</button>
            </form>
        </div>
      )
}