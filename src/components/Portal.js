import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  const el =
    typeof document !== 'undefined' ? document.createElement('div') : null;

  useEffect(() => {
    const portalRoot =
      typeof document !== 'undefined'
        ? document.getElementById('image-portal')
        : null;
    portalRoot.appendChild(el);
    return () => {
      portalRoot.removeChild(el);
    };
  }, [children, el]);

  return el ? ReactDOM.createPortal(children, el) : null;
};

export default Portal;
