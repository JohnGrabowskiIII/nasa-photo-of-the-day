import React from "react";
import styled from 'styled-components';

const DateContainer = styled.div`
    width: 15%;
    height: auto;
    align-self: center;
    background: ${props => props.theme.backgroundColor};
    border-radius: 10px;
    opacity: ${props => props.theme.opacity};

    button {
        color: ${props => props.theme.buttonFontColor};
        background-color: ${props => props.theme.buttonBackground};
        margin: 1px 5px;
    }

    input {
        color: ${props => props.theme.fontColor};
    }
`

function DateSetter(props) {

    // PROPS IS DATE STATE & DATE FORM & DATE CLICKHANDLER
    let {dateForm} = props;


return (
    // RETURN DATE FORM + BUTTON WITH CLICKHANDLER
    // <h1>DateSetter component loaded</h1>
    <DateContainer>
        {dateForm}
    </DateContainer>
)

}

export default DateSetter;