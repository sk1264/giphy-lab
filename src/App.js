import './App.css';
import { useState } from 'react';
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import Giphies from './components/Giphies';

function App() {
  const [giphies, setGiphies] = useState(0)

  function updateGiphies  () {
    let currentGiphies = giphies;
    currentGiphies++;
    setGiphies(currentGiphies)
  }
  return (
    <div className="container">
    <div className="App">
      <h1>Giphy</h1>
    </div>
    <Giphies />
    <button onClick={updateGiphies}>Submit</button>
    </div>
  );
}

export default App;
