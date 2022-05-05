import useObserver from '../hooks/useObserver';

const Galery = ({ id, Bgcolor }) => {
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
      Galeria
    </div>
  );
};
export default Galery;
