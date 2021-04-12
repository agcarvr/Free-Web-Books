import BookThumbnail from '../BookThumbnail/BookThumbnail';
import { v4 as uuidv4 } from 'uuid';
import styles from './SearchResults.module.css';

export default function SearchResults({bookList, lastSearch}) {
    return(
        <div className={styles.searchResultPage}>
            <p style={{color: "white", display: "block"}} className={styles.searchTitle}>Results For "{lastSearch}"</p>
            <div className={styles.searchBody}>
                {bookList && bookList.map ((book) => {
                    return (
                        <div key={uuidv4()}>
                            <BookThumbnail book={book} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}