import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../css/home.module.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import Stars from "./Stars";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const endpoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=c10fc4968349e5fae0b92511e9ecf9cd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
    axios.get(endpoint).then((response) => {
      const apiData = response.data;
      setMovies(apiData.results);
    });
  }, [setMovies]);

  return (
    <div className={styles.cont}>
      <div className={styles.div}>
        <SearchBar />
        <Stars />
      </div>
      <div>
        <h4 className={styles.h4}>Películas recomendadas</h4>
      </div>

      <div className={styles.movie}>
        {movies.map((oneMovie, index) => {
          return (
            <div key={index}>
              <div className={styles.divPic}>
                <Link to={`/detail?movieID=${oneMovie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                    alt="..."
                    className={styles.pic}
                  />
                </Link>
                <h5 className={styles.h5}>{oneMovie.title.substring(0, 15)}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
