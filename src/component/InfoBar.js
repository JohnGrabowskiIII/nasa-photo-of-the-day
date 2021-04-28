import React from "react";

function InfoBar(props) {

    // PROPS IS API STATE NAME + DATE
    const {date, title} = props;

return (
    // DIV FLEX FLOW
    // DATE TO FAR LEFT
    // NAME OF PHOTO TO FAR RIGHT
    // <h1>InfoBar component Loaded</h1>
    <div>
        <span>{date}</span>
        <h1>{title}</h1>
    </div>
)

}

export default InfoBar;