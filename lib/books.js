import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const booksPath = path.join(process.cwd(), '_books')

const getAllBookData = (authorData) => {
    const bookIDs = authorData.book_releases.map((book) => {
        const bookID = `${authorData.last_name.toLowerCase()}_${book.book_title.toLowerCase().split(' ').join('_')}`
        return bookID
    })
    const bookData = bookIDs.map(bookid => {
        const fullPath = path.join(booksPath, `${bookid}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents)
        const markdownBody = matterResult.content
        return {
            bookid,
            markdownBody,
            ...matterResult.data,
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
    const fileNames = fs.readdirSync(booksPath)
    const paths = fileNames.map(fileName => {
        const file = fileName.replace(/\.md$/, "")
        const fullPath = path.join(booksPath, `${file}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents)
        const authorID = `${matterResult.data.authors_last_name.toLowerCase()}_${matterResult.data.authors_first_name.toLowerCase()}`
        return {
            params: {
                authorID: authorID,
                bookID: file
            }
        }
    })
    return paths
}
const getBookData = (bookID) => {
        const fullPath = path.join(booksPath, `${bookID}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents)
        const markdownBody = matterResult.content
        return {
            bookID,
            markdownBody,
            ...matterResult.data,
        }
}
export { getAllBookData, getAllBookIDs, getBookData };