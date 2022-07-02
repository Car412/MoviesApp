import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import styles from "../css/search.module.css";

export default function SearchBar() {
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim(); // accedo al input a traves de su atributo name
    if (keyword.length === 0) {
      swal("Ingrese el nombre de la película");
    } else {
      e.currentTarget.keyword.value = "";
      history.push(`/results?keyword=${keyword}`);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>
          <input
            type="text"
            name="keyword"
            className={styles.input}
            placeholder="🔍"
          />
        </label>
      </form>
    </>
  );
}
