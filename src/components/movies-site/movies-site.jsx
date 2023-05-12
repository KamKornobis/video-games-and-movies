import { Button } from "../button/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../../api/getData";
import { MoviesList } from "../videos-list/movies-list";
import { SearchBox } from "../search-box/search-box";

export const MoviesSite = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [searchField, setSearchField] = useState("")
  const [filteredMoviesList, setFilteredMoviesList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '6595002667msh58518e4e7ab6d3bp11f99bjsn8e18e855b2db',
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
  };
    const movies = await getData('https://imdb-top-100-movies.p.rapidapi.com/', options);
    setMoviesList(movies);
  };

  useEffect(() => {
    const newFilteredGamesList = moviesList.filter((game) => {
      return game.title.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMoviesList(newFilteredGamesList);
  }, [moviesList, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div>
      <Link to="/">
        <Button name={"Take me to home site"} />
      </Link>

      <h1>
        Tell us what you watched recently, and we will recommend You something!
      </h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search movies"
        className="search-box"
      />
      <MoviesList moviesList={filteredMoviesList}/>
    </div>
  );
};
