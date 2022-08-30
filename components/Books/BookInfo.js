import Image from 'next/image'

import authorStyles from '../../styles/AuthorID.module.css'
import bookStyles from '../../styles/BookInfo.module.css'
import ArrowIcon from '../UI/ArrowIcon';
import BookReviews from './BookReviews';

const BookInfo = ({ authorsName, image, title, blurb, reviews, authorPg, className }) => {


    return (  
    <section className={bookStyles.greyColourContainer}>
      {authorPg && <ArrowIcon className={authorStyles.arrow} />}
      <div className={`${bookStyles.bookWrapper} ${!authorPg && bookStyles.mtLg}`}>
        <div className={`${className} ${bookStyles.col_2}`}>
          <div className={authorStyles.imageContainer}>
              <Image
                className={authorStyles.image}
                src={image} 
                alt={authorsName}
                layout="fill"
                />
          </div>
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
            <span> by {authorsName}</span>
          </h3>
          <p className={authorStyles.text}>
            {blurb}
          </p>
          {reviews !== undefined || 
          reviews && 
          <ul className={bookStyles.reviewWrapper}>
            <BookReviews reviews={reviews}/>
          </ul>}
          </div>
      </div>
    </section> );
}
 
export default BookInfo;