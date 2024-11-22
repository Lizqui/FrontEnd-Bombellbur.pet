import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function LoadingButton({ title, url }) {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {        
        window.open(url);
        setLoading(false); 
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <Button
      variant="light"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
      style={{ fontSize: 'small', marginLeft: '10px'}}
    >
      {isLoading ? 'Cargando…' : (
        <>
          <i className="bi bi-heart-fill"> {title} </i>
        </>
      )}
    </Button>
  );
}

export default LoadingButton;
