import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import styles from './SearchBar.module.css';

export default function SearchBar(props){
    const [ isSearching , setIsSearching ] = useState(false);
    const [searchString, setSearchString] = useState('');

    const getBooks = async (bookSearchString) => {
        try{
            const apiKey = process.env.REACT_APP_API_KEY;
            const url = `https://www.googleapis.com/books/v1/volumes?q=${bookSearchString}&filter=full&key=${apiKey}`
            const response = await fetch(url);
            const data = await response.json();
            props.setBookList(data.items);
        }catch (err) {
            return err;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsSearching(true);
        getBooks(searchString);
        props.setLastSearch(searchString)
        setSearchString('');
    }
    
    function handleChange(event) {
        event.preventDefault();
        setSearchString(event.target.value);
    }

    return (
        <div>
            {isSearching && <Redirect to="/searchresults"/>}
            <form className={styles.form} onSubmit={handleSubmit} >
                <input className={styles.searchBar}
                    placeholder="Search For Books"
                    type="text"
                    name="bookSearchString"
                    required
                    onChange={handleChange}
                    value={searchString}
                />
                <button className={styles.searchButton} type="submit">Find Books</button>
            </form>
        </div>
      )
}