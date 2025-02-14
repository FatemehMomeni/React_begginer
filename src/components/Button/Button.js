import React from "react";
import "./Button.css";
import PropTypes from "prop-types";


const Button = ({children, handleClick = () => {}, ...props }) => (
    <button onClick={handleClick} className="Button" {...props}>{children}</button>
);

Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
    children: PropTypes.element,
}

export default Button;