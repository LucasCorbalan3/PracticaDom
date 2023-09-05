// const CambiarTitulo = () => {
//   console.log("cambiar titulo dentro de la funcion");
//   // let tituloH1 = document.getElementById('Titulo')
//   let tituloH1 = document.querySelector("#Titulo");
//   //   console.log(tituloH1.innerHTML);

//   tituloH1.innerHTML = "titulo modificado";
//   tituloH1.className = "text-warning";
// };

const CambiarTitulo = () => {
  let titulo = document.querySelector("#Titulo");
  //   let btnCambiar = document.getElementById("btnCambiar");
  if (titulo.className === "text-light") {
    titulo.innerHTML = "titulo modificado";
    titulo.className = "text-warning";
  } else {
    titulo.innerHTML = "Practica DOM";
    titulo.className = "text-light";
  }
};

const Vermas = () => {
  console.log("dentro de ver mas");
  let contenedorPadre = document.querySelector("#ContenedorPadre");
  let btnVerMas = document.getElementById("btnVerMas");

  if (btnVerMas.innerHTML === " Ver Mas") {
    /* PRIMERA OPCION  */

    // let parrafo = document.createElement("p");
    // parrafo.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus incidunt voluptate ad dolor qui
    // nisi
    // facilis impedit cumque vitae delectus, perferendis dolore nesciunt itaque, quia officia nulla. Sed
    // corporis suscipit neque vitae, eaque quaerat blanditiis in sit illum ad voluptatibus, totam magnam
    // laboriosam quasi sint corrupti exercitationem nostrum eveniet amet.`;
    // parrafo.className = "lead";
    // ContenedorPadre.appendChild(parrafo);

    /* SEGUNDA OPCION */

    // ContenedorPadre.innerHTML += `<p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus incidunt voluptate ad dolor qui
    // nisi
    // facilis impedit cumque vitae delectus, perferendis dolore nesciunt itaque, quia officia nulla. Sed
    // corporis suscipit neque vitae, eaque quaerat blanditiis in sit illum ad voluptatibus, totam magnam
    // laboriosam quasi sint corrupti exercitationem nostrum eveniet amet.
    // </p>`;
    btnVerMas.innerHTML = "ver Mas";
    btnVerMas.className = "btn  btn-danger";
  } else {
    // console.log("aqui vamo a borrar el elemento");
    // console.log(ContenedorPadre.hasChildNodes());
    // console.log(ContenedorPadre.children);
    // if (
    //   ContenedorPadre.hasChildNodes() &&
    //   ContenedorPadre.children.length >= 2
    // ) {
    //   ContenedorPadre.removeChild(ContenedorPadre.children[1]);
    //   btnVerMas.innerHTML = " Ver Mas";
    //   btnVerMas.classList = "btn btn-primary";
    // }
    btnVerMas.innerHTML = "Ver Mas";
    btnVerMas.className = "btn btn-primary";
  }
};
