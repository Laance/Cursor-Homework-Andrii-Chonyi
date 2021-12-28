import React from "react";

const Button = ({ children }) => {
    const style = {
        color: 'red',
        backgroundColor: 'aquamarine',
        border: "1px solid black",
    }
    return <button  style={style}>{children}</button>
}

export default Button;