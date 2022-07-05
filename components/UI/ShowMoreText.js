import { useState } from "react";
import Text from './Text'

const ShowMoreText = ({ content }) => {
    const [ moreTextShown, setMoreTextShown ] = useState(false);

    const showMoreTextHandler = () => {
        setMoreTextShown(true)
    }

    const showLessTextHandler = () => {
        setMoreTextShown(false)
    }
    return ( 
            <Text
                state={moreTextShown} 
                moreText={showMoreTextHandler} 
                lessText={showLessTextHandler} 
                content={content} 
            />

     );
}
 
export default ShowMoreText;