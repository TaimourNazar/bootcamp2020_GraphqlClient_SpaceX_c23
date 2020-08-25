import React from 'react';
import Launch from './components/Launch';
import LaunchDetails from './components/LaunchDetails';

const App = () => {
  const [id, setId] = React.useState(42);
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <Launch handleIdChange={handleIdChange}/>
      <LaunchDetails infoId={id}/>
    </div>
  )
}

export default App;
