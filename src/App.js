import './App.css';
import { useState } from 'react';
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import Giphies from './components/Giphies';
import GiphyDisplay from './components/GiphyDisplay'
import Form from './components/Form';

function App() {
  const [giphy, setGiphy] = useState(null);
  const giph = new GiphyFetch('KqQzLFE33LCCrNO72Yi5qQB7MviuQSvm');

  const getGiphy = async (searchTerm) => {
    const { data } = await giph.search(searchTerm);
    setGiphy(data[0]);
  }

  return (
    <div className="App">
    <div className="container">
    <Giphies />
    <Form giphySearch={getGiphy} />
    <GiphyDisplay giphy={giphy}/>
    </div>
    </div>
  );
}


export default App;
