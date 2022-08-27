import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const booksPath = path.join(process.cwd(), '_books')
const authorsPath = path.join(process.cwd(), '_authors')

const getAllBookData = (authorData) => {
    /* Get all book releases by a specific author */
    const bookIDs = authorData.book_releases.map((book) => {
        const bookID = `${authorData.last_name.toLowerCase()}_${book.book_title.toLowerCase().split(' -').join('').split(' ').join('-')}`;
        return bookID
    })
    const bookData = bookIDs.map(bookid => {

        const fullPath = path.join(booksPath, `${bookid}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        const markdownBody = matterResult.content;

        const dateObj = new Date(matterResult.data.publish_date);
        const dateString = dateObj.toLocaleDateString("en-GB", { day: 'numeric', month: 'long', year: 'numeric' });
        matterResult.data.publish_date = dateString;
        
        return {
            bookid,
            markdownBody,
            ...matterResult.data
        }
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
        const fullAuthorPath = path.join(authorsPath, fileName);
        const fileContents = fs.readFileSync(fullAuthorPath, 'utf8');
        const matterResult = matter(fileContents);
        const authorID = fileName.replace(/\.md$/, "");
        const lastName = matterResult.data.last_name.toLowerCase();

        // Generate dynamic route paths for all author book releases
        matterResult.data.book_releases.map(book_release => {
            const bookID = `${lastName}_${book_release.book_title.toLowerCase().split(' -').join('').split(' ').join('-')}`
            return paths.push({params: {authorID, bookID}});
        })
        return paths
    })
    return paths
}

const getBookData = (bookID) => {
    /* Get data for individual book pages */
        const fullPath = path.join(booksPath, `${bookID}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents)
        const markdownBody = matterResult.content

        const dateObj = new Date(matterResult.data.publish_date)
        const dateString = dateObj.toLocaleDateString("en-GB", { day: 'numeric', month: 'long', year: 'numeric' })
        matterResult.data.publish_date = dateString;
        return {
            bookID,
            markdownBody,
            ...matterResult.data
        }
}


export { getAllBookData, getAllBookIDs, getBookData };