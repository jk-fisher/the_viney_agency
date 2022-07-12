import { getAllPageData } from '../../../../lib/pages'
import { getAllBookIDs, getBookData } from '../../../../lib/books'
import { getLayout } from '../../../../components/Layout/Layout'

const Book = ({bookData}) => {
    console.log(bookData)
    return ( <div>
        <h1>{bookData.title}</h1>
    </div> );
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

    const dateObj = new Date(bookData.publish_date)
    const dateString = dateObj.toLocaleDateString("en-GB", { day: 'numeric', month: 'long', year: 'numeric' })
    bookData.publish_date = dateString;
    
    return {
        props: {
            bookData,
            allPageData
        }
    }
}
Book.getLayout = getLayout; 
export { Book as default, getStaticPaths, getStaticProps };