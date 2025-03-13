import { useEffect, useState } from "react";
import { InputStyle } from "./InputBuilder";


const Input = ({ type = 'text', className, floatingPlaceholder = true }) => {

  const [inputStyle, setInputStyle] = useState();
  const inputClasses = type.trim().split(' ').filter(Boolean);

  useEffect(() => {
    const builder = new InputStyle()
    inputClasses.forEach((inputClass) => {
      const [method, arg] = inputClass.split('-')
      arg ? builder[method]?.(arg) : builder[method]?.();
    })

    setInputStyle(builder.build());

  }, [inputStyle, inputClasses])

  return (  
    
    <div className="relative w-full ">
      <input 
        type="text" 
        className={`${className} ${inputClasses} border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none`}
      />
    </div>

  )
}

export default Input