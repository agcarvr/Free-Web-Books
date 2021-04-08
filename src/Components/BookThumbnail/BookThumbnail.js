export default function BookThumbnail(props) {
    return(
        <div>
            <img src={props.book.volumeInfo.imageLinks.smallThumbnail}></img>
            <h1>Book</h1>
        </div>
    )
}