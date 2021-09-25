import React from 'react';
import { Detector } from './components/Detector';
import { Camera } from './components/Webcam';

const App: React.FC = () => {
  return (
    <div>
      <Detector />
      {/* <Camera /> */}
    </div>
  );
}

export default App;
