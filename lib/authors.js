import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const authorsPath = path.join(process.cwd(), '_authors')

const getAllAuthorData = () => {
    // get file names under /_reviews
    const fileNames = fs.readdirSync(authorsPath)

    console.log(fileNames)
    const authorData = fileNames.map(fileName => {
        //remove ".md from file name to get id"
        const id = fileName.replace(/\.md$/, "")

        //read markdown file as string
        const fullPath = path.join(authorsPath, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')


        //use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        //use react-markdown to parse the markdown body

        // const markdownBody = matterResult.content
        // console.log('matterResult.data', matterResult.data)
    
        //combine the data with the id
        return {
            id, 
            ...matterResult.data
        }
    })
    console.log(authorData)
    return authorData;
    
}
const getAllAuthorIDs = () => {
    const fileNames = fs.readdirSync(authorsPath)
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