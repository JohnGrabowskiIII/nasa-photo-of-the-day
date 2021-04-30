import React from "react";
import styled from 'styled-components';

const ImageDiv = styled.div`
    width: 100%;
    height: 500px;
`

const Apod = styled.img`
    display: block;
    max-width: 100%;
    height: 100%;
    margin: 0% auto;
    object-fit: cover;
`

function Photo(props) {

    // PROPS IS API STATE IMG URL + HD URL + MEDIATYPE
    const {url, hdUrl, mediaType} = props;

    return (
    // DIV LOCKED TO 100% WIDTH
    // IMAGE WILL FILL DIV
    // NEEDS DEFAULT ERROR LOAD! ACTIVATES WHEN INVALID DATE IS SUBMITTED
        // 
        <ImageDiv>
            {mediaType === 'image' ? <Apod src={hdUrl} /> : <iframe src={url} />}
        </ImageDiv>
    )

}

export default Photo;