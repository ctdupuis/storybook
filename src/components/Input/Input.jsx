import React from 'react';
import "./Input.css";

export default function Input(props) {
    const { size = 'medium', children, ...rest } = props;

    return (
        <input className={`input ${size}`} type='text' placeholder={`${size} size`} {...rest} />
    )
}
