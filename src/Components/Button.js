import React from 'react';
import PropTypes from "prop-types"

function Button({ children, primary, secondary, success, warning, danger, outline, rounded }) {
  return (
    <button className='bg-blue-500 text-white mx-3 my-3 px-3 py-1.5 border-2 border-blue-600'>
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


