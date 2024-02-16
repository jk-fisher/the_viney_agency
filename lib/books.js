import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bookFilenameHander } from '../utils/bookFilenameHandler';
import { getFileDataHandler } from '../utils/getFileDataHandler';


const booksPath = path.join(process.cwd(), '_books')
const authorsPath = path.join(process.cwd(), '_authors')



const getAllBookData = (authorData) => {
    /* Get all book releases by a specific author */
    const bookIDs = authorData.book_releases.map((book) => {
        const lastName = authorData.last_name.toLowerCase();
        const bookID = `${lastName}_${bookFilenameHander(book.book_title)}`;
        return bookID
    })

    const bookData = bookIDs.map(bookid => {
        let fileData = getFileDataHandler(booksPath, bookid);
        const dateObj = new Date(fileData.publish_date);
        const dateString = dateObj.toLocaleDateString("en-GB", { day: 'numeric', month: 'long', year: 'numeric' });
        fileData.publish_date = dateString;
        return {...fileData, bookid}
    })
    return bookData.sort(({ publish_date: a }, { publish_date: b }) => {
        if (a < b) {
            return 1
        } else if (a > b ) {
            return -1
        } else {
            return 0
        }
    })
}

const getAllBookIDs = () => {
    /* Get all possible book paths to pre-render */
    const fileNames = fs.readdirSync(authorsPath);
    const paths = [];
    fileNames.map(fileName => {
        const authorID = fileName.replace(/\.md$/, "");
        const fileData = getFileDataHandler(authorsPath, authorID);
        const lastName = fileData.last_name.toLowerCase();

        // Generate dynamic route paths for all author book releases
        fileData.book_releases.map(book_release => {
            const bookID = `${lastName}_${bookFilenameHander(book_release.book_title)}`;
            return paths.push({params: {authorID, bookID}});
        })
        return paths
    })
    return paths
}

const getBookData = (bookid) => {
    /* Get data for individual book pages */
    let fileData = getFileDataHandler(booksPath, bookid);

    const dateObj = new Date(fileData.publish_date)
    const dateString = dateObj.toLocaleDateString("en-GB", { day: 'numeric', month: 'long', year: 'numeric' })
    fileData.publish_date = dateString;
    return {...fileData, bookid}
}


export { getAllBookData, getAllBookIDs, getBookData };