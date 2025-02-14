import React from "react";
import "./Image.css";
import PropTypes from "prop-types";


const Image = ({imgSrc, alt=""}) => (
    <img src={imgSrc} alt={alt} className="Image" />
)

Image.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    alt: PropTypes.string,
}

export default Image;