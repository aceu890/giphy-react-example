import React, {useState, useEffect} from 'react';
import './App.css';

const GIFS = ['https://media4.giphy.com/media/yX8X517TiuMwuO2tdQ/giphy.gif?cid=ecf05e47cjqftvx8fnbpsaie7hm9525tkjylry6in885n8az&rid=giphy.gif&ct=g', 'https://media0.giphy.com/media/kal6CJH9rjCYjo3zuk/giphy.gif?cid=ecf05e4725y09yegi0cncjnsqari2qz1lf8w1ixlr7nc7rnq&rid=giphy.gif&ct=g']

const DIFFERENT_GIFS = [
  'https://media1.giphy.com/media/t7jzGb5JT0B2D7w771/giphy.gif?cid=ecf05e47tfr5zkm2hfhwhb7l7d51kx6gd644vn0o043o0gfo&rid=giphy.gif&ct=g'
]

function App() {

  const [gifs, setGifs] = useState(GIFS)

  // useEffect se renderiza cada vez que se renderiza el componente
  useEffect(() => {
    // console.log('efecto ejecutado');
    setGifs(DIFFERENT_GIFS) 
  }, [])
  


  return (
    <div className="App">
      <section className="App-content">
        {
          // recorre el array y renderiza cada imagen
          // forEach recorre una lista de elementos, pero no devuelve nada, el map devuelve algo
          // => return implicito
          gifs.map(singleGif => <img src={singleGif} />)
        }
        <button onClick={() => setGifs(DIFFERENT_GIFS) }>change img</button>
      </section>
    </div>
  );
}

export default App;
