
const ButtonText = ({ children, className = '' }) => {
  return <span className={`font-semibold ${className}`}>{children}</span>;
};

export default ButtonText;