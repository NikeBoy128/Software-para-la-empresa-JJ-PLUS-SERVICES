
// Define la URL de la API
const URL = "https://api.thecatapi.com/v1/images/search?limit=10";

// Función para cargar y mostrar una imagen
function cargarImagen() {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data[0].url;
      img.height = 500;
      img.width = 500;
    })
    .catch((error) => {
      console.error("Error al cargar la imagen:", error);
    });
}

// Carga una imagen cuando la página se carga inicialmente
window.addEventListener("load", cargarImagen);

// Obtén el botón por su ID
const btn = document.getElementById("prueba");

// Agrega un manejador de eventos al botón para cargar una nueva imagen cuando se haga clic
btn.addEventListener("click", cargarImagen);
