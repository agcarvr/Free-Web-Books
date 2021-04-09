import {Link} from 'react-router-dom';
import styles from './BookThumbnail.module.css';

export default function BookThumbnail(props) {
    return(
        <div>
            <Link className={styles.linkToDetail} to={'/bookdetails/' + props.book.id}>
                <img src={props.book.volumeInfo.imageLinks.thumbnail} alt={"Cover of " + props.book.volumeInfo.title}></img>
                <h3>{props.book.volumeInfo.title}</h3>
            </Link>
        </div>
    )
}