
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