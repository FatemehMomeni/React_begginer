import React from "react";
import "./Tutorials.css";
import TutorialSubjects from "../TutorialSubjects/TutorialSubjects";
import PropTypes from "prop-types";


const Tutorials = ({data}) => {
    return (
        <ul className="Tutorials">
            {
                data.map((item) => (<TutorialSubjects key={item.id} data={item} />))
            }
        </ul>
    )
}

Tutorials.propTypes = {
    data: PropTypes.array,
}

export default Tutorials;