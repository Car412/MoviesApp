import styles from "../css/stars.module.css";
import { useState} from "react";
import { useHistory } from "react-router-dom";

export default function Stars() {
  const history = useHistory();
  const [select, setSelect] = useState(false); 

/*   useEffect(() => {
    const endpoint =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=c10fc4968349e5fae0b92511e9ecf9cd&language=en-US";
    axios.get(endpoint).then((response) => {
      const apiData = response.data;
      setAverage(apiData.results);
    });
  }, [setAverage]); */

  const handleInputChange = (e) => {
    setSelect(e.target.id);
    history.push("/filtered");
  };

/*   const fiveStars = (
    <>
      {average
        .filter((movie) => movie.vote_average > 8)
        .map((movie) => (
          <div key={movie.id}>
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

  const fourStars = (
    <>
      {average
        .filter((movie) => movie.vote_average > 8)
        .map((movie) => (
          <div key={movie.id}>
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
          <div key={movie.id}>
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
          <div key={movie.id}>
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
          <div key={movie.id}>
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
  ); */

  return (
    <form className={styles.form}>
      <p className={styles.clasificacion}>
        <input
          id="radio5"
          type="radio"
          name="estrellas"
          className={styles.input}
          onClick={handleInputChange}
        />
        <label htmlFor="radio5" className={styles.label}>
          {" "}
          &#9733;{" "}
        </label>

        <input
          id="radio4"
          type="radio"
          name="estrellas"
          value="4"
          className={styles.input}
          onClick={handleInputChange}
        />
        <label htmlFor="radio4" className={styles.label}>
          {" "}
          &#9733;{" "}
        </label>
        <input
          id="radio3"
          type="radio"
          name="estrellas"
          value="3"
          className={styles.input}
          onClick={handleInputChange}
        />
        <label htmlFor="radio3" className={styles.label}>
          {" "}
          &#9733;{" "}
        </label>
        <input
          id="radio2"
          type="radio"
          name="estrellas"
          value="2"
          className={styles.input}
          onClick={handleInputChange}
        />
        <label htmlFor="radio2" className={styles.label}>
          {" "}
          &#9733;{" "}
        </label>
        <input
          id="radio1"
          type="radio"
          name="estrellas"
          value="1"
          className={styles.input}
          onClick={handleInputChange}
        />
        <label htmlFor="radio1" className={styles.label}>
          {" "}
          &#9733;{" "}
        </label>
      </p>
{/*       <div>
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
      </div> */}
    </form>
  );
}
