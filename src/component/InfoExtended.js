import React from "react";

function InfoExtended(props) {

    // PROPS IS FULL API STATE
    const {info} = props;
    // FUNCTION TOGGLES EXPAND/CONTRACT TO COMPONENT
    // ATTACH TO BUTTON


return (
    // BUTTON AT THE TOP
    // DISPLAY MOST API INFO INCLUDING PHOTOGRAPHER AND COPYWRITE
    // <h1>InfoExtended component loaded</h1>
    <div>
        <button>Expand</button>
        <p>Copywrite: {info.copywrite}</p>
        <p>Url: {info.url}</p>
        <p>HD URL: {info.hdurl}</p>
    </div>
)

}

export default InfoExtended;