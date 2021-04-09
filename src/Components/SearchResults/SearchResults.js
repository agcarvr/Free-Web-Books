import BookThumbnail from '../BookThumbnail/BookThumbnail';
import { v4 as uuidv4 } from 'uuid';

export default function SearchResults({bookList}) {
    return(
        <div>
            {bookList.map ((book) => {
                return (
                    <div key={uuidv4()}>
                        <BookThumbnail book={book} />
                    </div>
                )
            })}
        </div>
    )
}