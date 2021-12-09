import memeData from "../../memeData.js";
import React from "react";
/* LA PAGINA CUANDO CARGA LA 1era VEZ USA LOS DATOS DEFINIDOS EN USESTATE, CUANDO CLICKEAMOS EL BOTON */
/* SACAMOS UN NUMERO ALEATORIO , CON ESE NUMERO , SACAMOS UNA URL */
/*  */

export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImages, setAllMemesImages] = React.useState(memeData);
  /* en allMemesInages esta todo lo cargado en memeData.js */

  function getMemeImage() {
    /* funcion que se llama cuando apretamos el boton */
    let memesArray = allMemeImages.data.memes; /* aca estan los memes */
    let number = Math.floor(
      Math.random() * memesArray.length
    ); /* sacamos un numero random */

    const url = memesArray[number].url;
    /* sacamos una url, random del array */
    setMeme((prevMeme) => ({
      /* toma una version previa a meme */
      ...prevMeme /* hace un spread, le cambiamos el dato , randomImage, por la sacada en url */,
      randomImage: url
    }));
  }
  return (
    <section className="main">
      <div className="form">
        <input type="text" className="form--input"></input>
        <input type="text" className="form--input"></input>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="contenedor-imagen">
        <img src={meme.randomImage} className="imagen" alt="meme random"></img>
      </div>
    </section>
  );
}
