import { useState, useEffect } from 'react';
import { Container } from './style';

function App() {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = Math.floor(Math.random() * (25 - 3 + 1) + 3);
        return prev + next >= 100 ? 0 : prev + next;
      })
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container progress={progress}>
      <div className="white"></div>
      <div className="black"></div>
      <div className="mask"></div>
      <span>Uploading: {progress}%</span>
    </Container>
  )
}

export default App
