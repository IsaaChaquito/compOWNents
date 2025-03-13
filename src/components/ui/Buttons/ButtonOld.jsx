// import { wSize, tSize } from "../variants"

import { useEffect, useState } from "react";
import { ButtonBuilder } from "./ButtonBuilderOld";

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
const ButtonOld = (
  {
    children, 
    onClick, 
    className, 
    variant = 'primary md',
    type = 'button', 
    title = 'Click me',
    disabled = false,
  }) => {

  const [btnStyles, setBtnStyle] = useState();
  const btnClases = variant.trim().split(' ').filter(Boolean);

  useEffect(() => {
    // console.log(btnClases);
    const builder = new ButtonBuilder();
    btnClases.forEach((btnClass) => {
      const [method, arg] = btnClass.split('-');
      if (arg) {
        builder[method]?.(arg);
      } else {
        builder[method]?.();
      }
    });
    

    setBtnStyle(builder.build());
  }, [btnStyles, btnClases]);

  return (
    <>
      { btnStyles  &&
        <button 
          onClick={() => !disabled && onClick?.()}
          className={`${className} ${btnStyles} ${disabled && 'pointer-events-none opacity-40 user-select-none'}`}
          type={type || 'button'}
        >
          { children ?? title }
        </button>
        
      }
    </>
  )
}

export default ButtonOld
