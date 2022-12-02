import React from 'react'

export const DateTime = (props) => {
    console.log(props.date)
    return <p className="date">{props.date}</p>;
}
