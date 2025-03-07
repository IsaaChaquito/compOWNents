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
  <div className="relative w-ful">
      <pre className="peer text-sm  overflow-hidden  h-full">
        <code  className="language-xml rounded text-xs  ">
          {children}
        </code>
      </pre>
      <button
        onClick={copyToClipboard}
        className={`${isCopied ? "opacity-100" : "opacity-0"} flex absolute top-2 right-2 bg-[#333] text-white py-1 px-2 rounded cursor-pointer hover:bg-[#444] transition duration-300 ease-in-out text-sm peer-hover:opacity-100 hover:opacity-100`}
      >
        <CopyIcon className="w-4 h-4" />
        {isCopied && <span className="text-xs ml-1"> Copied! </span>}
      </button>
      
    </div>
  );
};

export default CodeBlock;
