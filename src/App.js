import React, {useState, useEffect} from 'react';
import './App.css';

const keyword = 'valorant';
const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa&q=${keyword}&limit=10&offset=0&rating=G&lang=en`;

function App() {

  const [gifs, setGifs] = useState([])

  useEffect(() => {
    fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response
      if (Array.isArray(data)) {
        const gifs = data.map(image => image.images.downsized_medium.url)
        setGifs(gifs)
      }
    })
  }, [])
  
  return (
    <div className="App">
      <section className="App-content">
        {
    
          gifs.map(singleGif => <img src={singleGif} />)
        }
      </section>
    </div>
  );
}

export default App;
