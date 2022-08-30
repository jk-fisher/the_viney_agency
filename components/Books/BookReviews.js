const BookReviews = (reviews) => {
    const bookReviews = reviews.map((review, index) => {
        return <li className={bookStyles.review} key={index}>
            <span className={bookStyles.reviewContent}>{`"${review.review}"`}</span>&nbsp;
            <span className={bookStyles.reviewAuthor}>{review.by}</span>
        </li>
        })
        return bookReviews;
        
}
 
export default BookReviews;