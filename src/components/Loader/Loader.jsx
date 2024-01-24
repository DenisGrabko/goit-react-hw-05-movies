import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999, // Adjust the z-index as needed
      }}
    >
      <TailSpin
        height="80"
        width="80"
        color="#7BA7AB"
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
    </div>
  );
};

export default Loader;