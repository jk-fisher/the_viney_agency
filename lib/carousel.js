import fs from 'fs';
import path from 'path';

const imagesDirectory = path.join(process.cwd(), 'public/images/carousel_images')

const getSortedImages = () => {
    // get file names under public/assets/images
    const fileNames = fs.readdirSync(imagesDirectory);

    //remove ".md from file name to get id"
    const imagePaths = fileNames.map(fileName => {
        const id = fileName.replace(/\.jpg$/, "")

    return id 
    })
    return imagePaths;

}
export { getSortedImages };