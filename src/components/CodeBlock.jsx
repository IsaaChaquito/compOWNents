import { useEffect, useState } from "react";
import hljs from "highlight.js";
import { CopyIcon } from "../assets/icons";
import "highlight.js/styles/atom-one-dark.css"; // Puedes cambiar el tema


const CodeBlock = ({ children }) => {

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
  <div className="relative w-full">
      <pre className="peer text-sm relative overflow-hidden max-w-full tab-size h-full">
        <code  className="language-xml rounded text-xs  ">
          {children}
        </code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="flex absolute top-2 right-2 bg-[#333] text-white py-1 px-2 rounded cursor-pointer hover:bg-[#444] transition duration-300 ease-in-out text-sm opacity-0 peer-hover:opacity-100 hover:opacity-100"
      >
        <CopyIcon className="w-4 h-4" />
        {isCopied && <span className="text-xs ml-1"> Copied! </span>}
      </button>
      
    </div>
  );
};

export default CodeBlock;
