import React from 'react';
// import PropTypes from "prop-types"
import className from "classnames";

function Button({ children, primary, secondary, success, warning, danger, outline, rounded, onClick }) {
  const  classes = className('flex items-center px-3 py-1.5 mx-2 my-2 border',{
    'bg-blue-500 border-blue-600 text-white':primary,
    'bg-gray-500 border-gray-600 text-white':secondary,
    'bg-green-500 border-green-600 text-white':success,
    'bg-yellow-500 border-yellow-600 text-white':warning,
    'bg-red-500 border-red-600 text-white':danger,
    'rounded-full':rounded,
    'bg-white':outline,
    'text-blue-600':outline && primary,
    'text-gray-600':outline && secondary,
    'text-green-600':outline && success,
    'text-yellow-600':outline && warning,
    'text-yellow-600':outline && danger,
  });
  return (
    <button className={classes} onClick={onClick} onMouseOver={()=>{console.log("Mouse")}}>
      {children}
    </button>
  )
}

Button.propTypes = {
  validateProps: ({primary,secondary,success,warning,danger}) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);
    if(count > 1){
      return new Error('invalid props');
    }
  }
};

export default Button


