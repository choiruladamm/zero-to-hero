import { useRef, useState, useEffect } from 'react';
import Button from '../../../../components/Button';

export default function RefStopWatch() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) { return; }
    timerIdRef.current = setInterval(() => setCount(c => c+1), 1000);
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  return (
    <div>
      <div className='text-center mb-3 text-2xl font-semibold'>Timer: {count}s</div>
      <div className='flex gap-5'>
        <Button onClick={startHandler}>Start</Button>
        <Button onClick={stopHandler}>Stop</Button>
      </div>
    </div>
  );
}