import { useMemo } from 'react';

function useButtonStyle({ type, disabled }) {
  const buttonClass = useMemo(() => {
    const base =  ['rounded', 'transition-all', 'duration-200', 'focus:outline-none']
    let typeClass = '';
    let disabledClass = '';

    switch (type) {
      case 'primary':
        typeClass = 'bg-blue-500 text-white';
        break;
      case 'secondary':
        typeClass = 'bg-gray-200 text-black';
        break;
      // Agrega más casos según se necesite
      default:
        typeClass = '';
    }

    

    if (disabled) {
      disabledClass = 'opacity-50 cursor-not-allowed';
    }

    return `${base} ${typeClass} ${disabledClass}`.trim();
  }, [type, disabled]);

  return buttonClass;
}

export default useButtonStyle;



export class ButtonBuilder {
  constructor() {
    this.classes = ['rounded', 'transition-all', 'duration-200', 'focus:outline-none'];
  }

  size(size) {
    const sizes = {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };
    this.classes.push(sizes[size]);
    return this;
  }

  color(clr) {
    const colors = {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'bg-gray-500 text-white hover:bg-gray-600',
      danger: 'bg-red-500 text-white hover:bg-red-600',
    };
    this.classes.push(colors[clr]);
    return this;
  }

  setCustomClass(className) {
    this.classes.push(className);
    return this;
  }

  xs() {
    this.classes.push('text-xs px-1.5 py-1 ');
    return this;
  }

  sm() {
    this.classes.push('  text-sm p-1 m-1');
    return this;
  }

  md() {
    this.classes.push('  text-md p-2 m-2');
    return this;
  }

  lg() {
    this.classes.push('  text-lg p-3 m-3');
    return this;
  }

  xl() {
    this.classes.push('  text-xl p-4 m-4');
    return this;
  }

  xxl() {
    this.classes.push('  text-2xl p-5 m-5');
    return this;
  }

  build() {
    return this.classes.join(' ');
  }
}


// Uso:
// const buttonClasses = new ButtonBuilder()
//   .setSize('md')
//   .setColor('primary')
//   .setCustomClass('mb-4')
//   .build();

//console.log(buttonClasses); // "rounded transition-all duration-200 focus:outline-none px-4 py-2 text-base bg-blue-500 text-white hover:bg-blue-600 mb-4"