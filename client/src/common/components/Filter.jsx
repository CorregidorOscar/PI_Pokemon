import { useDispatch, useSelector } from "react-redux";
import { filter } from "../redux/actions";

export default function Filter() {
  const types = useSelector((store) => store.types);
  const pokes = useSelector((store) => store.allPokemons);

  //   console.log("types", types);

  const dispatch = useDispatch();

  function handleSelect(e) {
    // console.log("e", e.target.value);
    dispatch(filter(e.target.value, pokes));
  }
  return (
    <div>
      {/* <form onSubmit={handleSelect}> */}
      <select onChange={handleSelect}>
        <option value="all">All</option>
        {types.length ? (
          types.map((e) => (
            <option key={e.id} value={e.name}>
              {`${e.name[0].toUpperCase()}${e.name.slice(1)}`}
            </option>
          ))
        ) : (
          <option value="error">error</option>
        )}
      </select>
      {/* </form> */}
    </div>
  );
}
