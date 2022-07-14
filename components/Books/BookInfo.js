import Image from 'next/image'

import authorStyles from '../../styles/AuthorID.module.css'
import bookStyles from '../../styles/BookInfo.module.css'
import ArrowIcon from '../UI/ArrowIcon';

const BookInfo = ({ authorsName, image, genre, title, blurb, reviews, authorPg }) => {

    const bookReviews = reviews.map((review, index) => {
        return <li className={bookStyles.review} key={index}>
          <span className={bookStyles.reviewContent}>{`"${review.review}"`}</span>&nbsp;
          <span className={bookStyles.reviewAuthor}>{review.by}</span>
        </li>
  
      })
    return (  
    <section className={bookStyles.greyColourContainer}>
      {authorPg && <ArrowIcon className={authorStyles.arrow} />}
      <div className={`${bookStyles.bookWrapper} ${!authorPg && bookStyles.mtLg}`}>
        <div className={bookStyles.col_2}>
          <div className={authorStyles.imageContainer}>
              <Image
                className={authorStyles.image}
                src={image} 
                alt={authorsName}
                layout="fill"
                />
          </div>
          <span className={bookStyles.tag}>Genre: {genre}</span>
        </div>
        <div className={bookStyles.col_1}>
          <h2 className={`${bookStyles.headerLg} ${authorStyles.headerBlue}`}>
            {authorPg ? "Latest Release" :
            title}
            </h2>
          <h3 className={`${authorStyles.headerSm} ${authorStyles.headerGrey}`}>
            {authorPg && <span className={authorStyles.bold}>
              {title}
            </span>}
             by {authorsName}
          </h3>
          <p className={authorStyles.text}>
            {blurb}
          </p>
          <ul className={bookStyles.reviewWrapper}>
            {bookReviews}
          </ul>
        </div>
      </div>
    </section> );
}
 
export default BookInfo;