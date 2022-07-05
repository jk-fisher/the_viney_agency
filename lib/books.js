import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const booksPath = path.join(process.cwd(), '_books')

const getAllBookData = (authorData) => {
    const bookIDs = authorData.book_releases.map((book) => {
        const bookID = `${authorData.last_name}_${book.book_title.toLowerCase().replace(' ', '_')}`
        return bookID
    })
    const bookData = bookIDs.map(bookID => {
        const fullPath = path.join(booksPath, `${bookID}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents)
        const markdownBody = matterResult.content
        return {
            bookID,
            markdownBody,
            ...matterResult.data,
        }
    })
    return bookData
}

export { getAllBookData };