import { useDispatch, useSelector } from "react-redux";
import { sort } from "../redux/actions";

export default function Sort() {
  const pokes = useSelector((store) => store.allPokemons);

  //   console.log("types", types);

  const dispatch = useDispatch();

  function handleSelect(e) {
    // console.log("e", e.target.value);
    const value = e.target.value;
    // console.log("sort", pokes);
    if (value === "unordered")
      dispatch(dispatch(sort(null, value, [...pokes])));
    const input = value.split(" ");
    dispatch(sort(input[0], input[1], [...pokes]));
  }
  return (
    <div>
      {/* <form onSubmit={handleSelect}> */}
      <select onChange={handleSelect}>
        <option value="unordered">Unordered</option>
        <option value="name asc">A---Z</option>
        <option value="name desc">Z---A</option>
        <option value="attack asc">Attack Asc</option>
        <option value="attack desc">Attack Desc</option>
      </select>
      {/* </form> */}
    </div>
  );
}
