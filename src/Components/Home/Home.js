import SearchBar from '../SearchBar/SearchBar';
import './Home.module.css';

export default function Home(props) {
    return(
        <div>
            <h1>Free Web Books</h1>
            <h4>Start Searching to Begin</h4>
            <SearchBar className="homeSearch" setBookList={props.setBookList}/>
        </div>
    )
}