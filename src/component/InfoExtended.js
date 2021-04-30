import React from "react";
import styled from 'styled-components';

const ExpandButton = styled.button`
    display: block;
    margin: auto;
    color: ${props => props.theme.buttonFontColor};
    background-color: ${props => props.theme.buttonBackground};
`

const InfoBox = styled.div`
    width: fit-content;
    margin-left: 3%;
    display: ${props => props.expand === true ? 'block' : 'none'};
    height: ${props => props.expand === true ? '130px' : '0px'};
    background-color: ${props => props.theme.backgroundColor};
    opacity: ${props => props.theme.opacity};
    border-radius: 20px;

    * {
        color: ${props => props.theme.fontColor};
        padding: 4px 8px;
    }
`

function InfoExtended(props) {

    const {info, isOpen, setIsOpen} = props;

    const boxExpander = () => setIsOpen(!isOpen);

return (
    <div>
        <ExpandButton onClick={() => boxExpander()} >Expand</ExpandButton>
        <InfoBox expand={isOpen}>
            <p>Copywrite: {info.copywrite}</p>
            <p>Url: <a href={info.url} target="_blank" rel="noopener noreferrer" >{info.url}</a></p>
            <p>HD URL: <a href={info.hdurl} target='_blank' rel="noopener noreferrer" >{info.hdurl}</a></p>
        </InfoBox>
    </div>
)

}

export default InfoExtended;