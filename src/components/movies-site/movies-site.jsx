import { Button } from "../button/button";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getData } from "../../api/getData";
import { MoviesList } from "../videos-list/movies-list";
import { SearchBox } from "../search-box/search-box";
import "./movies-site.scss";
import { MoviesContext } from "../../contexts/moviesContext";
import { MoviesItem } from "../videos-list/movies-item";

export const MoviesSite = () => {
  const [movies, setMovies] = useContext(MoviesContext);
  const [searchField, setSearchField] = useState("");
  const [filteredMoviesList, setFilteredMoviesList] = useState([]);
  const [chosenMovie, setChosenMovie] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
        "X-RapidAPI-Key": "b320860d0fmsh62304f3bccb359bp107198jsn9f636ca1706e",
      },
    };
    const movies = await getData(
      "https://imdb-top-100-movies.p.rapidapi.com/",
      options
    );
    setMovies(movies);
    console.log(movies);
  };

  useEffect(() => {
    const recommendedMovies = movies.filter((movie) => {
      return (
        movie.genre.toString().includes(chosenMovie.genre) &&
        !movie.title.includes(chosenMovie.title)
      );
    });
    setRecommendedMovies(recommendedMovies);
    console.log(recommendedMovies);
    console.log(chosenMovie);
  }, [movies, chosenMovie]);

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
      {chosenMovie.length === 0 && (
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
          <div className="movies-list-container">
            {movies.map((movie) => (
              <MoviesItem
                key={movie.id}
                title={movie.title}
                image={movie.image}
                onClick={() => setChosenMovie(movie)}
              />
            ))}
          </div>
        </div>
      )}
      {chosenMovie.length !== 0 && recommendedMovies.length !== 0 && (
        <div>
          <Link to="/">
            <Button buttonType="home-button" name={"Take me to home site"} />
          </Link>
          <h1>If you liked</h1>
          <div className="chosen-movie-container">
            <MoviesItem title={chosenMovie.title} image={chosenMovie.image} />
          </div>
          <h1>You Can also watch</h1>
          <div className="recommended-movies-container">
          <MoviesList movies={recommendedMovies} />
          </div>
          <div className="toggle-list-button-container">
            <Button
              buttonType={"toggle-list-button"}
              name={"Show me the List again"}
              onClick={() => setChosenMovie([])}
            />
          </div>
        </div>
      )}
      {chosenMovie.length !== 0 && recommendedMovies.length === 0 && (
        <div>
          <Link to="/">
            <Button buttonType="home-button" name={"Take me to home site"} />
          </Link>
          <h1>If you liked</h1>
          <div className="chosen-movie-container">
            <MoviesItem title={chosenMovie.title} image={chosenMovie.image} />
          </div>
          <h1>
            Sorry, there are no movies we can recommend You now. We
            consistently updating our library, so You can try later.
          </h1>
          <div className="toggle-list-button-container">
            <Button
              buttonType={"toggle-list-button"}
              name={"Show me the List again"}
              onClick={() => setChosenMovie([])}
            />
          </div>
        </div>
      )}
    </div>
  );
};
