import Link from 'next/link'
import Image from 'next/image'

import { getAllPageData } from '../../../../lib/pages'
import { getAllBookIDs, getBookData, getAllBookData } from '../../../../lib/books'
import { getLayout } from '../../../../components/Layout/Layout'
import { getAuthorData } from '../../../../lib/authors'
import { Fragment } from 'react'

import BookInfo from '../../../../components/Books/BookInfo'
import BookList from '../../../../components/Books/BookList'

import booksStyles from '../../../../styles/BookList.module.css'

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
        <Link
            href={{
            pathname: '/authors/[authorID]/[bookID]',
            query: {
                        authorID: authorData.authorID,
                        bookID: book_release.bookid  }
                    }}
            className={booksStyles.gridItem} key={book_release.bookid}>
                    <a>
                        <Image 
                            src={book_release.image}
                            alt={`${book_release.title}`}
                            width={400}
                            height={570}
                        />
                    </a>
        </Link> :
        <div className={booksStyles.gridItem} key={book_release.bookid}>
            <Image 
                src={book_release.image}
                alt={`${book_release.title}`}
                width={400}
                height={570}
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
    // console.log('paths', paths)
    return {
        paths,
        fallback: false,
    };
}
const getStaticProps = async ({params}) => {
    const allPageData = getAllPageData();

    const bookData = getBookData(params.bookID)

    const authorData = getAuthorData(params.authorID)

    const allBookData = getAllBookData(authorData)
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