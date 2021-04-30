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

const Video = styled.iframe`
    display: block;
    margin: auto auto;
    width: 80%;
    height: 80%;
    margin-top: 5%;
`

function Photo(props) {

    const {url, hdUrl, mediaType} = props;

    return (
        <ImageDiv>
            {mediaType === 'image' ? <Apod src={hdUrl} /> : <Video src={url} />}
        </ImageDiv>
    )

}

export default Photo;