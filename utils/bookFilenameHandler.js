import slug from "slug"

export const bookFilenameHander = (bookID) => {
    const clean_title = slug(bookID, { lower: true });
    return clean_title;
}