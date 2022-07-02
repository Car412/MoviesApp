import styles from "../css/filtered.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FilteredMovies() {
  const [select, setSelect] = useState(false);
  const [average, setAverage] = useState([]);

  let query = new URLSearchParams(window.location.search);
  let page = query.get("page");

  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=c10fc4968349e5fae0b92511e9ecf9cd&language=en-US&page=${page}`;   

    axios.get(endpoint).then((response) => {
      const apiData = response.data;
      setAverage(apiData.results);
    });
  }, []);

  const fiveStars = (
    <>
      {average
        .filter((movie) => movie.vote_average > 8)
        .map((movie) => (
          <>
            <Link to={`/detail?movieID=${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="..."
                className={styles.pic}
              />
            </Link>
            <h5 className={styles.h5}>{movie.title.substring(0, 15)}</h5>
          </>
        ))}
    </>
  );

  const fourStars = (
    <>
      {average
        .filter((movie) => movie.vote_average > 8)
        .map((movie) => (
          <div>
            <Link to={`/detail?movieID=${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="..."
                className={styles.pic}
              />
            </Link>
            <h5 className={styles.h5}>{movie.title.substring(0, 15)}</h5>
          </div>
        ))}
    </>
  );

  const threeStars = (
    <>
      {average
        .filter((movie) => movie.vote_average > 8)
        .map((movie) => (
          <div>
            <Link to={`/detail?movieID=${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="..."
                className={styles.pic}
              />
            </Link>
            <h5 className={styles.h5}>{movie.title.substring(0, 15)}</h5>
          </div>
        ))}
    </>
  );

  const twoStars = (
    <>
      {average
        .filter((movie) => movie.vote_average > 8)
        .map((movie) => (
          <div>
            <Link to={`/detail?movieID=${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="..."
                className={styles.pic}
              />
            </Link>
            <h5 className={styles.h5}>{movie.title.substring(0, 15)}</h5>
          </div>
        ))}
    </>
  );

  const oneStars = (
    <>
      {average
        .filter((movie) => movie.vote_average > 8)
        .map((movie) => (
          <div>
            <Link to={`/detail?movieID=${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="..."
                className={styles.pic}
              />
            </Link>
            <h5 className={styles.h5}>{movie.title.substring(0, 15)}</h5>
          </div>
        ))}
    </>
  );

  return (
    <div className={styles.cont}>
      <h3 className={styles.h3}>Resultados según calificación:</h3>
      <div className={styles.movie}>
        {average.map((oneMovie, index) => {
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
                <div className={styles.div}>
                  <h5 className={styles.h5}>
                    {oneMovie.title.substring(0, 20)}
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {select === "radio5"
          ? fiveStars
          : select === "radio4"
          ? fourStars
          : select === "radio3"
          ? threeStars
          : select === "radio2"
          ? twoStars
          : select === "radio1"
          ? oneStars
          : null}
      </div>
    </div>
  );
}
