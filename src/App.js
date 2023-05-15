import './App.css';
import { GamesSite } from './components/games-site/games-site';
import { MoviesSite } from './components/movies-site/movies-site';
import { Home } from './components/home/home';
import { Routes, Route } from "react-router-dom";
import { GamesProvider } from './contexts/gamesContext';
import { MoviesProvider } from './contexts/moviesContext';

function App() {
  return (
    <GamesProvider>
    <MoviesProvider>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/games' element={<GamesSite />} />
      <Route path='/movies' element={<MoviesSite />} />
    </Routes>
    </MoviesProvider>
    </GamesProvider>
  );
}

export default App;
