import React, { forwardRef } from 'react';
import useObserver from '../hooks/useObserver';

const Product = ({ id, Bgcolor }) => {
  let stylesCustom = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3rem',
    width: '100%',
    height: '100vh',
    color: '#fff',
    backgroundColor: Bgcolor,
  };
  const refObserver = useObserver();
  return (
    <div ref={refObserver} id={id} style={stylesCustom}>
      Productos
    </div>
  );
};

export default Product;
