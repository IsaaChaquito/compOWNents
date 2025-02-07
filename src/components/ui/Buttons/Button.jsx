// import { wSize, tSize } from "../variants"

import { useEffect, useState } from "react";
import { BtnStyle } from "./ButtonBuilder";

/**
 * @function Button
 * @description A basic button component
 * @param {Object} props Component props
 * @param {String} [props.type='primary md'] The type of button, can be a combination of (primary, secondary, danger, bw, wb) and (xs, sm, md, lg, xl, xxl)
 * @param {String} [props.title='Button'] The title of the button
 * @param {String} [props.className=''] Additional classnames for the button
 * @param {Function} [props.onClick=undefined] The function to call when the button is clicked
 * @returns {ReactElement} The Button component
 */
const Button = (
  {
    children, 
    onClick, 
    className, 
    type = 'primary md', 
    title = 'Button',
    disabled = false,
  }) => {

  const [btnStyle, setBtnStyle] = useState();
  const btnClases = type.trim().split(' ').filter(Boolean);

  useEffect(() => {
    // console.log(btnClases);
    const instance = new BtnStyle();
    btnClases.forEach((btnClass) => {
      const [method, arg] = btnClass.split('-');
      if (arg) {
        instance[method]?.(arg);
      } else {
        instance[method]?.();
      }
    });
    
    setBtnStyle(instance.build());
  }, [btnStyle, btnClases]);

  return (
    <>
      { btnStyle  &&
        <button 
          onClick={() => !disabled && onClick()}
          className={`${className} ${btnStyle} ${disabled && 'pointer-events-none opacity-40'}`}
        >
          { children ?? title }
        </button>
        
      }
    </>
  )
}

export default Button
