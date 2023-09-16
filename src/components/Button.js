import React from "react";
import PropTypes from "prop-types";

function Button({ text, color }) {
  return (
    <button className="btn" style={{backgroundColor: color}}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
