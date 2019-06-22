import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  const el = document.createElement('div');
  useEffect(() => {
    const portalRoot = document.getElementById('image-portal');
    portalRoot.appendChild(el);
    return () => {
      portalRoot.removeChild(el);
    };
  }, [children, el]);

  return ReactDOM.createPortal(children, el);
};

export default Portal;
