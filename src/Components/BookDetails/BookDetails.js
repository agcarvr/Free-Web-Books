import Styles from './BookDetails.module.css';

export default function BookDetails({routerProps, bookList}) {
    const currentBook = bookList.filter((book) => {
        return book.id === routerProps.match.params.id;
    })[0];
    if(currentBook){
        return(
            <div className={Styles.detailsPage}>
                {/* <h1>{currentBook.volumeInfo.title} Details</h1> */}
                <span className={Styles.overview}>
                    <img className={Styles.cover} src={currentBook.volumeInfo.imageLinks.thumbnail} alt={"The Cover of " + currentBook.volumeInfo.title}></img>
                    <div className={Styles.indivDetails}>
                        <p><b>Title:</b> {currentBook.volumeInfo.title}</p>
                        <p><b>Author(s):</b> {currentBook.volumeInfo.authors.join(" and ")}</p>
                        <div>
                            <b>Summary: </b>
                            <p className={Styles.summary} dangerouslySetInnerHTML={{__html: currentBook.searchInfo.textSnippet}}></p>
                        </div>
                    </div>
                </span>
                <div className={Styles.linkList}>
                    <a className={Styles.externalLinks} href={currentBook.accessInfo.webReaderLink} target="_blank" rel="noreferrer">Read This Book In Your Browser</a>
                    <a className={Styles.externalLinks} href={currentBook.accessInfo.pdf.downloadLink} target="_blank" rel="noreferrer">View PDF From Google Books</a>
                    <a className={Styles.externalLinks} href={currentBook.accessInfo.epub.downloadLink} target="_blank" rel="noreferrer">Download EPUB From Google Books</a>
                </div>
            </div>
        )
    }else {
        return <h1>Loading Book Details</h1>
    }
}