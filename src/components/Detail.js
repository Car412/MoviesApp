import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../css/detail.module.css";
import { Link } from "react-router-dom";

export default function Detail() {
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=c10fc4968349e5fae0b92511e9ecf9cd&language=es-ES&page=1&include_adult=false`;
    axios.get(endpoint).then((response) => {
      const movieData = response.data;
      setMovieDetail(movieData);
    });
  }, [movieID]);

  return (
    <div className={styles.back}>
      {movieDetail && (
        <div className={styles.cont}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
            alt={movieDetail.title}
            className={`${styles.movieData} ${styles.pic}`}
          />
          <div className={`${styles.movieData} ${styles.info}`}>
            <p>
              <strong>Título:</strong>
              {movieDetail.title}
            </p>
            <p>
              <strong>Géneros:</strong>
              {""}
              {movieDetail.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p>
              <strong>Reseña:</strong>
              {movieDetail.overview}
            </p>
            <p>
              <strong>Calificación:</strong>
              {movieDetail.vote_average}
            </p>
            <Link to="/">
              <button className={styles.button}>🏠Inicio</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
