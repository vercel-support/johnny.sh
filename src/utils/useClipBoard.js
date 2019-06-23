import { useState } from 'react';
import copy from 'copy-to-clipboard';

const useClipBoard = text => {
  const [isCopied, setIsCopied] = useState(false);

  return [
    isCopied,
    () => {
      const didCopy = copy(text);
      setIsCopied(didCopy);
    },
  ];
};

export default useClipBoard;
