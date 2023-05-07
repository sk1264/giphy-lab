import './App.css';
import { useState } from 'react';
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import Giphies from './components/Giphies';

function App() {
  const [giphies, setGiphies] = useState([])
  return (
    <div className="container">
    <div className="App">
      <h1>Giphy</h1>
    </div>
    <Giphies giphies={giphies} setGiphies={setGiphies} />
    </div>
  );
}

export default App;
