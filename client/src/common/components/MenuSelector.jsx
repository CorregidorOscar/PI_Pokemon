import { useState } from "react";
import styles from "./Menu.modules.css";
export default function MenuSelector(props) {
  // Data
  var options = props.data;
  const onChange = props.onChange;
  const valueelement = props.value;
  const [visible, setvisible] = useState(false);
  const [seleccion, addelement] = useState(valueelement);
  const [input, setinput] = useState("");

  const deleteelement = (e) => {
    var array = [...seleccion]; // make a separate copy of the array
    const index = e.target.getAttribute("value");
    if (index !== -1) {
      array.splice(index, 1);
      addelement(array);
      onChange(array);
    }
  };

  const cambiarestado = (e) => {
    if (visible === false) {
      mostrardatos(true);
    }
  };

  const ocultardatos = (e) => {
    setvisible(false);
    document.removeEventListener("click", ocultardatos);
  };

  const mostrardatos = (input) => {
    setvisible(input);
    document.addEventListener("click", ocultardatos);
  };

  return (
    <div className={styles.formgroup}>
      <div
        className={styles.mymenu}
        style={{
          display: `${visible ? "block" : "none"}`,
        }}
      >
        <div className={styles.ttdataset}>
          {options
            .filter(
              (item) =>
                item.nombre.toUpperCase().search(input.toUpperCase()) !== -1
            )
            .map((item, index) => (
              <div
                className={styles.ttsuggestion}
                style={{
                  display: `${visible ? "block" : "none"}`,
                }}
                key={item.id}
                data-key={item.nombre}
                value={item.id}
                onClick={(e) => {
                  const nuevodato = {
                    name: e.target.getAttribute("data-key"),
                    id: e.target.getAttribute("value"),
                  };
                  addelement(seleccion.concat(nuevodato));
                  onChange(seleccion.concat(nuevodato));
                }}
              >
                {item.nombre}
              </div>
            ))}
        </div>
      </div>

      {/* <a onClick={cambiarestado}> */}
      <input
        onClick={cambiarestado}
        onChange={(e) => {
          setinput(e.target.value);
          cambiarestado(e);
        }}
        type="text"
        className={styles.formcontrol}
        //   role="textbox"
        placeholder=""
      />
      {/* </a> */}

      <div>
        {seleccion.map((item, index) => (
          <button onClick={deleteelement} value={index} key={index}>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
