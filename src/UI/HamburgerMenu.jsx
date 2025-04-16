
import 'delicious-hamburgers/dist/hamburgers.css';

const HamburgerMenu = ( {isExpanded, toggleDrawer} ) => {


  return (
    <button
      onClick={toggleDrawer}
      className={` !rounded !bg-black/7 hover:!bg-black/20 hamburger hamburger--flatten ${!isExpanded ? 'active' : ''}`}
      type="button"
      aria-label="Menu"
      aria-expanded={isExpanded}
    >
      <div className="inner">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </div>
    </button>
  );
};

export default HamburgerMenu;