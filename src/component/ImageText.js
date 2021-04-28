import React from "react";

function ImageText(props) {

    // PROPS IS STATE PHOTO INFO
    const {info} = props;

return(
    // DIV CONTAINER
    // P TAGS
    // <h1>ImageText component loaded</h1>
    <div>
        <p>{info}</p>
    </div>
)

}

export default ImageText;