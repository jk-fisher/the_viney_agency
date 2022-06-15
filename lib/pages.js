import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const pagesPath = path.join(process.cwd(), '_pages')

const getDynamicPageData = () => {
    // get file names under /_reviews
    const fileNames = fs.readdirSync(pagesPath)

    console.log(fileNames)
    const pageData = fileNames.map(fileName => {
        //remove ".md from file name to get id"
        const id = fileName.replace(/\.md$/, "")

        //read markdown file as string
        const fullPath = path.join(pagesPath, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')


        //use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)
        console.log(matterResult)

        //use react-markdown to parse the markdown body

        const markdownBody = matterResult.content
        console.log('matterResult.data', matterResult.data)
    
        //combine the data with the id
        return {
            id, 
            markdownBody,
            ...matterResult.data
        }
    })
    return pageData
    
}
const getAllPageIDs = () => {
    const fileNames = fs.readdirSync(pagesPath)
    console.log('filenames', fileNames)
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
    
    return {
        pageID,
        ...matterResult.data,
    }
}

    


export { getDynamicPageData, getAllPageIDs, getPageData };