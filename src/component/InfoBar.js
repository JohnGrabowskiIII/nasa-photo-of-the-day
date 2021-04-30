import React from "react";
import styled from 'styled-components';

const InfoBarDiv = styled.div`
    border: ${props => props.theme.border};
    border-radius: 20%;
    margin: 10px auto;
    padding 8px;
    width: fit-content;
    background-color: ${props => props.theme.backgroundColor};
    opacity: ${props => props.theme.opacity};

    * {
        color: ${props => props.theme.fontColor}
    }

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