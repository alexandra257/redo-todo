import React, { useState } from 'react';
var moment = require('moment');
moment().format();

function DateTime() {

    const style = {
        fontFamily: 'Dancing Script',
        fontSize: '40px',
        textAlign: 'right'
    }


    const date = moment().format('MMMM DD YYYY');
    const now = moment().format('h:mm:ss a');

    const [time, setTime] = useState(now);
    //this is the function that will update the inital value of the initial state
    function updateTime() {
        const newTime = moment().format('h:mm:ss a'); //this will allow us to call a new updated time
        setTime(newTime); //this is the function we delcared would update our state in the destructured array
    }

    setInterval(updateTime, 1000);

    return (
        <div style={style}>
            <p>{date}</p>
            <p>{time}</p>
        </div>
    );
}

export default DateTime;
