import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const authorsPath = path.join(process.cwd(), '_authors')

const getAllAuthorData = () => {
    /* Get all author data */

    // get file names under /_authors in directory
    const fileNames = fs.readdirSync(authorsPath);

    const authorData = fileNames.map(fileName => {
        //remove ".md from file name to get id"
        const id = fileName.replace(/\.md$/, "");

        //read markdown file as string
        const fullPath = path.join(authorsPath, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        //use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        //create serializable date string
        let dateObj = new Date(matterResult.data.date);
        const uniqueID = `${dateObj.getDate()}${dateObj.getHours()}${dateObj.getMinutes()}`;
        matterResult.data.date = uniqueID;
        return {
            id, 
            ...matterResult.data
        }
    })
    return authorData;
    
}

const getAllAuthorIDs = () => {
    /* Get all possible author paths to pre-render */
    const fileNames = fs.readdirSync(authorsPath);
    const paths = fileNames.map(fileName => {
        const file = fileName.replace(/\.md$/, "")
        return {
           params: {
               authorID: file
           } 
       }
})
    return paths
}

const getAuthorData = (authorID) => {
    /* Get data for individual author pages */
    const fullPath = path.join(authorsPath, `${authorID}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const markdownBody = matterResult.content;

    let dateObj = new Date(matterResult.data.date);
    const uniqueID = `${dateObj.getDate()}${dateObj.getHours()}${dateObj.getMinutes()}`;
    matterResult.data.date = uniqueID;
    return {
        authorID,
        markdownBody,
        ...matterResult.data,
    }
}

    


export { getAllAuthorData, getAllAuthorIDs, getAuthorData };