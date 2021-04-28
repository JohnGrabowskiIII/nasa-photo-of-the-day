import React from "react";

function DateSetter(props) {

    // PROPS IS DATE STATE & DATE FORM & DATE CLICKHANDLER
    let {dateForm} = props;


return (
    // RETURN DATE FORM + BUTTON WITH CLICKHANDLER
    // <h1>DateSetter component loaded</h1>
    <div>
        {dateForm}
    </div>
)

}

export default DateSetter;