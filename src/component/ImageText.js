import React from "react";
import styled from 'styled-components';

const TextDiv = styled.div`
    width: 70%;
    border: 1px solid purple;
`

function ImageText(props) {

    // PROPS IS STATE PHOTO INFO
    const {info} = props;

return(
    // DIV CONTAINER
    // P TAGS
    // <h1>ImageText component loaded</h1>
    <TextDiv>
        <p>{info}</p>
    </TextDiv>
)

}

export default ImageText;