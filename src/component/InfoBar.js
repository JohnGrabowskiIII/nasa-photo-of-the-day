import React from "react";
import styled from 'styled-components';

const InfoBarDiv = styled.div`
    border: 3px solid green;
    border-radius: 20%;
    margin: 10px auto;
    width: fit-content;
`

const TitleText = styled.h1`
    text-align: center;
`

const DateTag = styled.p`
    text-align: center;
`

function InfoBar(props) {

    // PROPS IS API STATE NAME + DATE
    const {date, title} = props;

return (
    // DIV FLEX FLOW
    // DATE TO FAR LEFT
    // NAME OF PHOTO TO FAR RIGHT
    // <h1>InfoBar component Loaded</h1>
    <InfoBarDiv>
        <TitleText>{title}</TitleText>
        <DateTag>{date}</DateTag>
    </InfoBarDiv>
)

}

export default InfoBar;