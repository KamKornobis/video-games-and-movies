import { Button } from "../button/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovies } from "../../api/getMovies";
import { MoviesItem } from "../videos-list/movies-item";
import { MoviesList } from "../videos-list/movies-list";
import { SearchBox } from "../search-box/search-box";

export const MoviesSite = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const movies = await getMovies();
    setData(movies);
  };
  console.log(data);

  return (
    <div>
      <Link to="/">
        <Button name={"Take me to home site"} />
      </Link>

      <h1>
        Tell us what you watched recently, and we will recommend You something!
      </h1>
      <SearchBox
        // onChangeHandler={onSearchChange}
        placeholder="search movies"
        className="search-box"
      />
      <MoviesList>
        {data &&
          data.map((movie) => (
            <MoviesItem
              key={movie._id}
              title={movie.title}
              image={movie.image}
            />
          ))}
      </MoviesList>
    </div>
  );
};
