import React from "react";
import styled from 'styled-components';

const DateContainer = styled.div`
    width: 15%;
    height: auto;
    border: 1px solid orange;
    align-self: flex-end;
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