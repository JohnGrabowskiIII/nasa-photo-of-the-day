import React from "react";
import styled from 'styled-components';

const FooterDiv = styled.div`
    margin: auto;
    width: 94%;
    background-color: ${props => props.theme.backgroundColor};
    opacity: ${props => props.theme.opacity};
    font-size: 12px;

    h3 {
        color: ${props => props.theme.fontColor};
        text-align: center;
    }
`

function Footer() {


return (
    // <h1>Footer component loaded</h1>
    <FooterDiv>
        <h3>Created by: John Grabowski, 2021/04/30</h3>
    </FooterDiv>
)

}

export default Footer;