import authorStyles from '../../styles/AuthorID.module.css'
import bookStyles from '../../styles/BookID.module.css'
import booksStyles from '../../styles/Books.module.css'

const BookList = ({ authorsName, releasedBooks }) => {
    return ( <section className={booksStyles.blueColourContainer}>
        <div className={booksStyles.allBooks}>
            <h2 className={`${bookStyles.headerLg} ${authorStyles.headerBlue}`}>Other Publications</h2>
            <h3 className={`${authorStyles.headerSm} ${authorStyles.headerDark}`}>by {authorsName}</h3>
            <ul className={booksStyles.gridWrapper}>
                {releasedBooks}
            </ul>
        </div>
      </section> );
}
 
export default BookList;