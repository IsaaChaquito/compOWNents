
export class BtnStyle {

  constructor() {
    this.classes = ['rounded', 'transition-all', 'duration-200', 'focus:outline-none', 'cursor-pointer', 'user-select-none', 'shadow-md', 'active:scale-[.97]', 'text-nowrap'];
  }

  primary() {
    this.classes.push('bg-blue-500 text-white hover:bg-blue-600');
    return this;
  }

  secondary() {
    this.classes.push('bg-gray-500 text-white hover:bg-gray-600');
    return this;
  }
  
  success() {
    this.classes.push('bg-green-500 text-white hover:bg-green-600');
    return this;
  }

  warning() {
    this.classes.push('bg-yellow-500 text-white hover:bg-yellow-600');
  }

  danger() {
    this.classes.push('bg-red-500 text-white hover:bg-red-600');
    return this;
  }

  neutral() {
    this.classes.push('bg-gray-500 text-white hover:bg-gray-600');
    return this;
  }

  transparent() {
    this.classes.push('bg-transparent text-black hover:bg-gray-100');
  }

  bw() {
    this.classes.push('bg-black text-white hover:bg-gray-800');
    return this;
  }

  wb() {    
    this.classes.push('bg-white text-black hover:bg-gray-100');
    return this;
  }

  customColor(color) {
    this.classes.push(`bg-${color} text-white hover:bg-${color}-600`);
    return this;
  }

  setCustomClass(className) {
    this.classes.push(className);
    return this;
  }

  xs() {
    this.classes.push('text-xs px-1.5 py-1.5');
    return this;
  }

  sm() {
    this.classes.push('text-sm px-2 py-1.5');
    return this;
  }

  md() {
    this.classes.push('text-md px-2 py-1.5');
    return this;
  }

  lg() {
    this.classes.push('text-lg px-2 py-1.5');
    return this;
  }

  xl() {
    this.classes.push('text-xl px-2 py-1.5');
    return this;
  }

  xxl() {
    this.classes.push('text-2xl px-3 py-1.5');
    return this;
  }

  reset() {
    this.classes = ['rounded', 'transition-all', 'duration-200', 'focus:outline-none', 'cursor-pointer'];
  }

  build() {
    return this.classes.join(' ');
  }
}


// Uso:
// const buttonClasses = new ButtonBuilder()
//   .primary()
//   .md()
//   .build();

//console.log(buttonClasses); // "rounded transition-all duration-200 focus:outline-none px-4 py-2 text-base bg-blue-500 text-white hover:bg-blue-600 mb-4"