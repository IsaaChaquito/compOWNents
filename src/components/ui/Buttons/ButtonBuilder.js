
export class BtnStyle {

  constructor() {
    this.classes = [
      'rounded', 
      'transition-all', 
      'duration-150', 
      'focus:outline-none', 
      'cursor-pointer', 
      'user-select-none', 
      'shadow-low',  
      'text-nowrap',
      'active:scale-x-95',
      'active:scale-y-85',
    ];
  }

  primary( outline ) {
    this.classes.push(
      outline === 'out' 
      ? 'bg-white text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-500' 
      : 'bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600'
    )
    return this;
  }

  secondary( outline ) {
    this.classes.push(
      outline === 'out' 
      ? 'bg-white text-gray-500 hover:text-white border border-gray-500 hover:bg-gray-500' 
      : 'bg-gray-500 text-white hover:bg-gray-600 focus:bg-gray-600'
    )
    return this;
  }
  
  success( outline ) {
    this.classes.push(
      outline === 'out' 
      ? 'bg-white text-green-500 hover:text-white border border-green-500 hover:bg-green-500' 
      : 'bg-green-500 text-white hover:bg-green-600 focus:bg-green-600'
    )
    return this;
  }

  warning( outline ) {
    this.classes.push(
      outline === 'out' 
      ? 'bg-white text-yellow-500 hover:text-white border border-yellow-500 hover:bg-yellow-500' 
      : 'bg-yellow-500 text-white hover:bg-yellow-600 focus:bg-yellow-600'
    )
    return this;
  }

  danger( outline ) {
    this.classes.push(
      outline === 'out' 
      ? 'bg-white text-red-500 hover:text-white border border-red-500 hover:bg-red-500' 
      : 'bg-red-500 text-white hover:bg-red-700 focus:bg-red-700'
    )
    return this;
  }

  neutral() {
    this.classes.push('bg-gray-500 text-white hover:bg-gray-600 focus:bg-gray-600');
    return this;
  }


  black( outline ) {
    this.classes.push(
      outline === 'out' 
      ? 'bg-white text-black hover:text-white border border-black hover:bg-black' 
      : 'bg-black text-white hover:bg-stone-700 focus:bg-stone-700'
    )
    return this;
  }

  white( outline ) { 
    this.classes.push(
      outline === 'out' 
      ? 'bg-white text-black hover:text-black border border-black hover:bg-black hover:text-white' 
      : 'bg-white text-black hover:bg-gray-200 focus:bg-gray-200'
    )
    return this;
  }

  setCustomClass(className) {
    this.classes.push(className);
    return this;
  }

  xxs() {
    this.classes.push('text-xxs px-1.5 py-1.5 h-fit');
    return this;
  }

  xs() {
    this.classes.push('text-xs px-1.5 py-1.5 h-fit');
    return this;
  }

  sm() {
    this.classes.push('text-sm px-2 py-1.5 h-fit');
    return this;
  }

  md() {
    this.classes.push('text-md px-2 py-1.5 h-fit');
    return this;
  }

  lg() {
    this.classes.push('text-lg px-2.5 py-1.5 h-fit');
    return this;
  }

  xl() {
    this.classes.push('text-xl px-2.5 py-2 h-fit');
    return this;
  }

  xxl() {
    this.classes.push('text-2xl px-3 py-2 h-fit');
    return this;
  }



  reset() {
    this.classes = ['rounded', 'transition-all', 'duration-200', 'focus:outline-none', 'cursor-pointer'];
  }

  build() {
    // console.log(this.classes);
    return this.classes.join(' ');
  }
}


// Uso:
// const buttonClasses = new ButtonBuilder()
//   .primary()
//   .md()
//   .build();

//console.log(buttonClasses); // "rounded transition-all duration-200 focus:outline-none px-4 py-2 text-base bg-blue-500 text-white hover:bg-blue-600 mb-4"