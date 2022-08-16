import Link from 'next/link'
import Image from 'next/image'

import { getAllPageData } from '../../../../lib/pages'
import { getAllBookIDs, getBookData, getAllBookData } from '../../../../lib/books'
import { getLayout } from '../../../../components/Layout/Layout'
import { getAuthorData } from '../../../../lib/authors'
import { Fragment } from 'react'

import BookInfo from '../../../../components/Books/BookInfo'
import BookList from '../../../../components/Books/BookList'

import styles from '../../../../styles/BookID.module.css'
import booksStyles from '../../../../styles/BookList.module.css'
import { motion } from 'framer-motion'

const Book = ({bookData, authorData, allBookData}) => {

    const authorsName = `${authorData.first_name} ${authorData.last_name}`

    const bookTitle = bookData.title;
    const bookImage = bookData.image;
    const bookGenre = bookData.genre;
    const bookBlurb = bookData.markdownBody;
    const reviews = bookData.book_reviews;

    const releasedBooks = allBookData.map((book_release) => {
        return (
        book_release.markdownBody ?
        <motion.div key={book_release.bookid} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
                href={{
                pathname: '/authors/[authorID]/[bookID]',
                query: {
                            authorID: authorData.authorID,
                            bookID: book_release.bookid  }
                        }}
                className={booksStyles.gridItem} key={book_release.bookid}>
                        <a className={styles.imageContainer}>
                            <Image 
                                src={book_release.image}
                                alt={`${book_release.title}`}
                                className={styles.image}
                                layout="fill"
                            />
                        </a>
            </Link> 
        </motion.div> :
        <div key={book_release.bookid} className={`${booksStyles.gridItem} ${styles.imageContainer}`}>
            <Image 
                src={book_release.image}
                alt={`${book_release.title}`}
                className={styles.image}
                layout="fill"
            />
            
        </div>
        )
    })

    return ( <Fragment>
        <BookInfo 
          authorPg={false} 
          authorsName={authorsName} 
          reviews={reviews}
          image={bookImage}
          genre={bookGenre}
          title={bookTitle}
          blurb={bookBlurb}
          />
        <BookList 
          authorsName={authorsName} 
          releasedBooks={releasedBooks}
          />
        </Fragment>
        )
}

const getStaticPaths = async () => {
    const paths = getAllBookIDs();
    return {
        paths,
        fallback: false,
    };
}
const getStaticProps = async ({params}) => {
    const allPageData = getAllPageData();
    const bookData = getBookData(params.bookID);
    const authorData = getAuthorData(params.authorID);
    const allBookData = getAllBookData(authorData);
    return {
        props: {
            bookData,
            authorData,
            allBookData,
            allPageData
        }
    }
}
Book.getLayout = getLayout; 
export { Book as default, getStaticPaths, getStaticProps };