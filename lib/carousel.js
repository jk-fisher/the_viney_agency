import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const imagesPath = path.join(process.cwd(), 'public/images/carousel_images')
const authorsPath = path.join(process.cwd(), '_authors')
const booksPath = path.join(process.cwd(), '_books')

const getSortedImages = () => {
    // get file names under public/assets/images
    const fileNames = fs.readdirSync(imagesPath);

    //remove ".md from file name to get id"
    const bookID = fileNames.map(fileName => {
        const id = fileName.replace(/\.jpg$/, "")

    return id 
    })
    return bookID;

}

/* Function to get all possible params inc imageID and authorIDs
    - Get imageID in books.md files
    - When we find it, get author name
    - Look in author.md files for author name
    - Check author has a book release with matching imageID
        - If yes, get authorID
        - If no, continue to look through authors for matching authorID */
const getCarouselParams = () => {
    const imageFileNames = fs.readdirSync(imagesPath);
    const authorFileNames = fs.readdirSync(authorsPath);

    const carousel = [];
    imageFileNames.map(fileName => {
        //remove ".jpg" from file name to get id"
        const bookID = fileName.replace(/\.jpg$/, "");

        //add ".md" to get book path
        const bookFileName = fileName.replace(/\.jpg$/, ".md");
        
        //read markdown file inside booksPath
        const fullPath = path.join(booksPath, bookFileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        //use gray-matter to parse the metadata section of the book
        const matterResult = matter(fileContents);

        //get authors name
        const authorName = `${matterResult.data.author_last_name.toLowerCase()}_${matterResult.data.author_first_name.toLowerCase()}`;

        //find author.md file with matching author name
        const matchingAuthors = authorFileNames.filter(authorFileName => authorFileName.includes(authorName));

        //map over possible authors
        if(matchingAuthors.length > 1){
            matchingAuthors.map(authorFileName => {

                const fullPath = path.join(authorsPath, authorFileName);
                const fileContents = fs.readFileSync(fullPath, 'utf8');
    
                //use gray-matter to parse the metadata section of author
                const matterResult = matter(fileContents);
                const authorID = authorFileName.replace(/\.md$/, "");
                //Return a match
                matterResult.data.book_releases.map(book => {
                    const clean_title = book.book_title.toLowerCase().split('-').map(element => {
                        return element.trim()
                    });
                    const releaseID = `${matterResult.data.last_name.toLowerCase()}_${clean_title.join(' ').split(' ').join('-')}`
                    if(bookID === releaseID){
                        return carousel.push({authorID, bookID})
                    }
                    return carousel;
                })
                return carousel;
            })
        } else {
            const authorID = matchingAuthors[0].replace(/\.md$/, "");
            return carousel.push({authorID, bookID})
        }
        return carousel;
    })
    return carousel;
}


//Not needed? 
const getCarouselImageIds = () => {
    const fileNames = fs.readdirSync(imagesPath);

    //remove ".md from file name to get id"
    const carousel = fileNames.map(fileName => {
        const file = fileName.replace(/\.jpg$/, "")
        return {
            params: {
                carouselBookID: file
            } 
        }
 })
     return carousel
}


export { getSortedImages, getCarouselImageIds, getCarouselParams };