import React, {useState, useEffect} from 'react';
import './App.css';
import getGifs from './services/getGifs';


function App() {
  
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword: 'the last of us'}).then(gifs => setGifs(gifs))
  }, [])
  
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => {
            return <div>
              <small>{ singleGif.id }</small>
              <h4>{ singleGif.title }</h4>
              <img alt={singleGif.title} src={singleGif.url} />
          </div>
        })
      }
      </section>
    </div>
  );
}

export default App;
