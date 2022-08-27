import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const pagesPath = path.join(process.cwd(), '_pages')

const getAllPageData = () => {
    // get file names under /_reviews
    const fileNames = fs.readdirSync(pagesPath)

    const pageData = fileNames.map(fileName => {
        //remove ".md from file name to get id"
        const id = fileName.replace(/\.md$/, "")

        //read markdown file as string
        const fullPath = path.join(pagesPath, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        //use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        //combine the data with the id
        return {
            id, 
            // markdownBody,
            ...matterResult.data
        }
    })
    return pageData
    
}
const getAllPageIDs = () => {
    const fileNames = fs.readdirSync(pagesPath)
    const paths = fileNames.map(fileName => {
        return {
           params: {
               pageID: fileName.replace(/\.md$/, "")
           } 
       }
})
    return paths
}

const getPageData = (pageID) => {
    const fullPath = path.join(pagesPath, `${pageID}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents)
    const markdownBody = matterResult.content

    return {
        pageID,
        markdownBody,
        ...matterResult.data,
    }
}

    


export { getAllPageData, getAllPageIDs, getPageData };