import React from "react";

function Photo(props) {

    // PROPS IS API STATE IMG URL + HD URL + MEDIATYPE
    const {url, hdUrl, mediaType} = props;

    return (
    // DIV LOCKED TO 100% WIDTH
    // IMAGE WILL FILL DIV
    // NEEDS DEFAULT ERROR LOAD! ACTIVATES WHEN INVALID DATE IS SUBMITTED
        // 
        <div>
            {mediaType === 'image' ? <img src={hdUrl} /> : <iframe src={url} />}
        </div>
    )

}

export default Photo;