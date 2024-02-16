export const getFileDataHandler = (folder, id) => {
    const fullPath = path.join(folder, id);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const markdownBody = matterResult.content;
    return {
        id,
        markdownBody,
        ...matterResult.data
    }
}