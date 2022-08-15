import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';




const markdownToHtml = async (markdown) => {
    const result = await remark().use(html).use(prism).process(markdown);
    const dirty = result.toString();
    const createDOMPurify = require('dompurify');
    const { JSDOM } = require('jsdom');

    const window = new JSDOM('').window;
    const DOMPurify = createDOMPurify(window);

    const clean = DOMPurify.sanitize(dirty);
  return clean;
} 

export default markdownToHtml;
