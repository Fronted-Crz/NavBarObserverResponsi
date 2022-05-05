import { useState } from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Galery from './pages/Galery';
import Nosotros from './pages/Nosotros';
import Contac from './pages/Contac';

function App() {
  return (
    <>
      <Navbar />
      <Home id={'inicio'} Bgcolor={'#112B3C'} />
      <Product id={'productos'} Bgcolor={'#F66B0E'} />
      <Galery id={'galeria'} Bgcolor={'#205375'} />
      <Nosotros id={'nosotros'} Bgcolor={'#EFEFEF'} />
      <Contac id={'contacto'} Bgcolor={'#112B3C'} />
    </>
  );
}

export default App;
