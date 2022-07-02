import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import styles from "../css/results.module.css";

export default function Results() {
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");

  const [moviesResults, setMoviesResults] = useState([]);

  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=c10fc4968349e5fae0b92511e9ecf9cd&language=en-EN&query=${keyword}`;
    axios
      .get(endpoint)
      .then((response) => {
        const moviesArray = response.data.results;

        if (moviesArray.length === 0) {
          swal("No se encontraron resultados");
        }
        setMoviesResults(moviesArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [keyword]);

  return (
    <div className={styles.cont}>
      <h3 className={styles.h3}>Resultado de tu búsqueda:</h3>
      <div className={styles.movie}>
        {moviesResults.map((oneMovie, index) => {
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
    </div>
  );
}
