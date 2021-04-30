import React from "react";
import styled from 'styled-components';

const InfoBox = styled.div`
    border: 2px solid blue;
    display: ${props => props.expand === true ? 'block' : 'none'};
    height: ${props => props.expand === true ? '130px' : '0px'};
    transition: 1s
`

function InfoExtended(props) {

    const {info, isOpen, setIsOpen} = props;

    // BUTTON CLICK HANDLER
    const boxExpander = () => setIsOpen(!isOpen);

return (
    <div>
        <button onClick={() => boxExpander()} >Expand</button>
        <InfoBox expand={isOpen}>
            <p>Copywrite: {info.copywrite}</p>
            <p>Url: <a href={info.url} target="_blank" >{info.url}</a></p>
            <p>HD URL: <a href={info.hdurl} target='_blank' >{info.hdurl}</a></p>
        </InfoBox>
    </div>
)

}

export default InfoExtended;