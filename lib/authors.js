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
        console.log(matterResult)

        //use react-markdown to parse the markdown body

        // const markdownBody = matterResult.content
        // console.log('matterResult.data', matterResult.data)
    
        //combine the data with the id
        return {
            id, 
            // markdownBody,
            ...matterResult.data
        }
    })
    return authorData.sort(({ last_name: a }, { last_name: b }) => {
        if (a < b) {
            return 1
        } else if (a > b ) {
            return -1
        } else {
            return 0
        }
    })
    
}
const getAllAuthorIDs = () => {
    const fileNames = fs.readdirSync(authorsPath)
    console.log('filenames', fileNames)
    const paths = fileNames.map(fileName => {
        return {
           params: {
               authorID: fileName.replace(/\.md$/, "")
           } 
       }
})
    return paths
}

const getAuthorData = (authorID) => {
    const fullPath = path.join(authorsPath, `${authorID}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents)
    
    const markdownBody = matterResult.content

    return {
        authorID,
        markdownBody,
        ...matterResult.data,
    }
}

    


export { getAllAuthorData, getAllAuthorIDs, getAuthorData };