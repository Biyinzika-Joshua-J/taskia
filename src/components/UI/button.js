import React from 'react';
import './button.css';

const Button = props =>{

    const styles = {
        color:props.color,
        backgroundColor:props.bg,
    }

    return (
        <button style={styles} className={props.class}>
            {props.text}
        </button>
    )
}

export default Button;