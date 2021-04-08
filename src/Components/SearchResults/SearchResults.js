import BookThumbnail from '../BookThumbnail/BookThumbnail';

export default function SearchResults({routerProps, bookList}) {
    return(
        <div>
            <h1>This is the search results page</h1>
            {bookList.map ((book, i) => {
                console.log(book);
                return (
                    <BookThumbnail book={book} key={i} />
                )
            })}
        </div>
    )
}