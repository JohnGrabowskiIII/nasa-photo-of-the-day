import React from "react";
import styled from 'styled-components';

const TextDiv = styled.div`
    width: 70%;
    background: ${props => props.theme.backgroundColor};
    border-radius: 5%;
    padding: 1%;
    opacity: ${props => props.theme.opacity};

    * {
        color: ${props => props.theme.fontColor};
    }
`

function ImageText(props) {

    const {info} = props;

return(
    <TextDiv>
        <p>{info}</p>
    </TextDiv>
)

}

export default ImageText;