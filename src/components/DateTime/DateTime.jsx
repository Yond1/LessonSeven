import React from 'react'
import { DateTimePretty } from '../HOC/DateTimePretty';

const DateTime = (props) => {
    return <p className="date">{props.date}</p>;
}

export default DateTimePretty(DateTime)