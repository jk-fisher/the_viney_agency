import fs from 'fs';
import path from 'path';
import { getFileDataHandler } from '../utils/getFileDataHandler';
import { bookFilenameHander } from '../utils/bookFilenameHandler';

const carouselPath = path.join(process.cwd(), '_carousel')
const authorsPath = path.join(process.cwd(), '_authors')
const booksPath = path.join(process.cwd(), '_books')

/* Function to get all possible params inc imageID and authorIDs
    - Get imageID in books.md files
    - When we find it, get author name
    - Look in author.md files for author name
    - Check author has a book release with matching imageID
        - If yes, get authorID
        - If no, continue to look through authors for matching authorID */

const getCarouselParams = () => {
    const authorFileNames = fs.readdirSync(authorsPath);
    const carouselData = getFileDataHandler(carouselPath, "carousel");
    const carousel = [];

    carouselData.images.map(image => {
        const imagePath = image.image
        const bookID = imagePath.replace("/images/carousel_images/", "").replace(/\.jpg$/, "");
        const bookData = getFileDataHandler(booksPath, bookID);
        const authorName = `${bookData.author_last_name.toLowerCase()}_${bookData.author_first_name.toLowerCase()}`;

        //find author.md file with matching author name
        const matchingAuthors = authorFileNames.filter(authorFileName => authorFileName.includes(authorName));

        //map over possible authors
        if(matchingAuthors.length > 1){
            matchingAuthors.map(authorFileName => {
                
                const authorID = authorFileName.replace(/\.md$/, "");
                const authorData = getFileDataHandler(authorsPath, authorID);
                
                //Return a match
                authorData.book_releases.map(book => {
                    
                    const releaseID = `${authorData.last_name.toLowerCase()}_${bookFilenameHander(book.book_title)}`
                    if(bookID === releaseID){
                        return carousel.push({authorID, bookID})
                    }
                    return carousel;
                })
            })
        } else {
            const authorID = matchingAuthors[0].replace(/\.md$/, "");
            return carousel.push({authorID, bookID})
        }
    })
    return carousel;
}


export { getCarouselParams };