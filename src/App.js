import React, {useState} from 'react';
import './App.css';

const GIFS = ['https://media1.giphy.com/media/K9z3im98oo9Ve/giphy.gif?cid=ecf05e47cevz8eaoxdz0yfbjnatlu3i8eheikanm557z9vi9&rid=giphy.gif&ct=g', 'https://media1.giphy.com/media/EatwJZRUIv41G/giphy.gif?cid=ecf05e47wx3lhajhmmx2gf220x67dunukxx66td2ihjnypce&rid=giphy.gif&ct=g']

const DIFFERENT_GIFS = [
  'https://media0.giphy.com/media/Xu3FmS0zWUeu4/giphy.gif?cid=ecf05e47q5f2oqgw20wyx3ytc6joguqmoyowcoh8sji22jdq&rid=giphy.gif&ct=g'
]

function App() {

  const [gifs, setGifs] = useState(GIFS)


  return (
    <div className="App">
      <section className="App-content">
        {
          // recorre el array y renderiza cada imagen
          gifs.map(singleGif => <img src={singleGif} />)
        }
        <button onClick={() => setGifs(DIFFERENT_GIFS) }>change Panda</button>
      </section>
    </div>
  );
}

export default App;
