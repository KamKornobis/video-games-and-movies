import { Button } from "../button/button";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getData } from "../../api/getData";
import { MoviesList } from "../videos-list/movies-list";
import { SearchBox } from "../search-box/search-box";
import "./movies-site.scss";
import { MoviesContext } from "../../contexts/moviesContext";

export const MoviesSite = () => {
  const [movies, setMovies] = useContext(MoviesContext);
  const [searchField, setSearchField] = useState("");
  const [filteredMoviesList, setFilteredMoviesList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
        "X-RapidAPI-Key": ""
      },
    };
    const movies = await getData(
      "https://imdb-top-100-movies.p.rapidapi.com/",
      options
    );
    setMovies(movies);
    console.log(movies)
  };

  useEffect(() => {
    const newFilteredGamesList = movies.filter((movie) => {
      return movie.title.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMoviesList(newFilteredGamesList);
  }, [movies, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="movies-page">
      <div>
        <Link to="/">
          <Button buttonType="home-button" name={"Take me to home site"} />
        </Link>
        <h1>
          Tell us what you watched recently, and we will recommend You
          something!
        </h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search movies"
          className="search-box"
        />
        <MoviesList movies={filteredMoviesList} />
      </div>
    </div>
  );
};
