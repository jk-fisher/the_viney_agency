import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

import { getAllPageData } from '../../../lib/pages'
import { getAllAuthorIDs, getAuthorData } from '../../../lib/authors'
import { getAllBookData } from '../../../lib/books'
import { getLayout } from '../../../components/Layout/Layout'

import styles from '../../../styles/BookID.module.css'
import AuthorInfo from '../../../components/Author/AuthorInfo'
import BookInfo from '../../../components/Books/BookInfo'
import BookList from '../../../components/Books/BookList'
import markdownToHtml from '../../../lib/handleMarkdown'
import { motion } from 'framer-motion'


const Author = ({authorData, allBookData}) => {
    const authorsName = `${authorData.first_name} ${authorData.last_name}`
    const authorImage = authorData.image;
    const authorBio = authorData.markdownBody;
    const authorTwitter = authorData.twitter;
    const authorInsta = authorData.instagram;
    const authorWeb = authorData.url;

    const bookTitle = allBookData[0].title;
    const bookImage = allBookData[0].image;
    const bookGenre = allBookData[0].genre;
    const bookBlurb = allBookData[0].markdownBody;
    const reviews = allBookData[0].book_reviews;


    
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
              >
                      <a>
                          <Image 
                              src={book_release.image}
                              alt={`${book_release.title}`}
                              className={styles.img}
                              width={380}
                              height={600}
                              objectFit='cover'
                          />
                      </a>
          </Link> 
        </motion.div> :
        <div key={book_release.bookid}>
            <Image 
                src={book_release.image}
                alt={`${book_release.title}`}
                className={styles.img}
                width={380}
                height={600}
                objectFit='cover'
            />
            
        </div>
        )
    })
    
    return ( <Fragment>
        <Head>
          <title>{`${authorsName} - The Viney Agency`}</title>
          <meta name="description" content={`${authorsName} is an author represented by The Viney Agency`} />
          <link rel="icon" href="/assets/tva_logo.png" />
        </Head>
        <AuthorInfo
          image={authorImage}
          authorsName={authorsName}
          biography={authorBio}
          insta={authorInsta}
          twitter={authorTwitter}
          web={authorWeb}
          />
        <BookInfo
          authorPg={true} 
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
    const paths = getAllAuthorIDs();
    return {
        paths,
        fallback: false,
    };
}
const getStaticProps = async ({params}) => {
  const allPageData = getAllPageData();
  const authorData = getAuthorData(params.authorID);
  const body = await markdownToHtml(authorData.markdownBody);
  authorData.markdownBody = body;
  const allBookData = getAllBookData(authorData);

  return {
      props: {
        allPageData,
        authorData,
        allBookData
      } 
  }
}

Author.getLayout = getLayout; 
export {Author as default, getStaticProps, getStaticPaths};