import BookThumbnail from '../BookThumbnail/BookThumbnail';
import { v4 as uuidv4 } from 'uuid';
import styles from './SearchResults.module.css';

export default function SearchResults({bookList}) {
    return(
        <div className={styles.searchBody}>
            {bookList && bookList.map ((book) => {
                return (
                    <div className={styles.indivResult} key={uuidv4()}>
                        <BookThumbnail book={book} />
                    </div>
                )
            })}
        </div>
    )
}