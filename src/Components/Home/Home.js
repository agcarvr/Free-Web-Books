import SearchBar from '../SearchBar/SearchBar';
import styles from './Home.module.css';

export default function Home(props) {
    return(
        <div className={styles.background}>
            <h1 className={styles.title}>Free Web Books</h1>
            <h2 className={styles.title}>A Hub For Books In The Public Domain</h2>
            <h4 className={styles.instruct}>Start Searching to Begin</h4>
            <SearchBar className={styles.searchBar} setBookList={props.setBookList}/>
        </div>
    )
}