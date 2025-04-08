import { useEffect, useState } from "react";
import Prism from "prismjs";
import { CopyIcon } from "../assets/icons";
import "prismjs/themes/prism-tomorrow.css"; // Tema oscuro similar a atom-one-dark
import "prismjs/components/prism-jsx"; // Importar soporte para JSX

const CodeBlock = ({ children, language = "jsx" }) => {
  const [isCopied, setIsCopied] = useState(false);
  
  useEffect(() => {
    // Highlight en el montaje inicial y cuando cambia el contenido
    Prism.highlightAll();
  }, [children]);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };
  
  return (
    <div className="relative w-full">
      <pre className="peer text-sm overflow-hidden h-full rounded">
        <code className={`language-${language} !text-sm`}>
          {children}
        </code>
      </pre>
      <button
        onClick={copyToClipboard}
        className={`${isCopied ? "opacity-100" : "opacity-0"} flex absolute top-3 right-1 bg-gray-500 text-white py-1 px-2 rounded cursor-pointer hover:bg-gray-600 transition duration-300 ease-in-out text-sm peer-hover:opacity-100 hover:opacity-100`}
      >
        <CopyIcon className="w-4 h-4" />
        {isCopied && <span className="text-xs ml-1"> Copied! </span>}
      </button>
    </div>
  );
};

export default CodeBlock;

