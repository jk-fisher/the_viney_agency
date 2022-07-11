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

export { getAllBookData };