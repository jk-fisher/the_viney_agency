import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getFileDataHandler = (folder, id) => {
    const fullPath = path.join(folder, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const markdownBody = matterResult.content;
    return {
        id,
        markdownBody,
        ...matterResult.data
    }
}