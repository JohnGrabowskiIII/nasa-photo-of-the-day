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
        opacity: 1;
    }

    input {
        color: ${props => props.theme.fontColor};
    }
`

function DateSetter(props) {

    let {dateForm} = props;


return (
    <DateContainer>
        {dateForm}
    </DateContainer>
)

}

export default DateSetter;