var ejecucionModal = document.getElementById("ejecucionModal");
ejecucionModal.addEventListener("click", plantillaHabitacion);

var guardarCambios = document.getElementById("guardarCambios");
guardarCambios.addEventListener("click", guardarDatos);

var habitacionPredeterminada = document.getElementById("habitacionPredeterminada");
var contenidoRow = document.getElementById("contenidoRow");
var limitador = 0;

var botonFinal = document.getElementById("resultado");
botonFinal.addEventListener("click", resultadoFinal);


fechaActual();
function fechaActual() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;
  document.getElementById("fLlegada").value = today;
  document.getElementById("fLlegada").setAttribute("min", today);
}

numeroNoches();
function numeroNoches() {
  for (var i = 1; i <= 15; i++) {
    var dailyOptgroup = document.getElementById("daily");
    var nuevaNoche = document.createElement("option");
    var infoNoches = document.createTextNode([i] + " Noches");
    nuevaNoche.setAttribute("value", [i]);
    nuevaNoche.appendChild(infoNoches);
    dailyOptgroup.appendChild(nuevaNoche);
  }
}

function plantillaHabitacion() {
  var botonExtra = document.createElement("button");
  var infoBoton = document.createTextNode("Añadir habitación");
  botonExtra.setAttribute("type", "button");
  botonExtra.setAttribute("id", "botonExtra");
  botonExtra.setAttribute("class", "btn btn-success mb-2");
  botonExtra.appendChild(infoBoton);
  habitacionPredeterminada.appendChild(botonExtra);

  var numHabitacion = document.createElement("h4");
  var infoHabitacion = document.createTextNode("Habitación");
  numHabitacion.appendChild(infoHabitacion);
  habitacionPredeterminada.appendChild(numHabitacion);

  var adultos = document.createElement("p");
  var infoAdultos = document.createTextNode("Adultos: ");
  adultos.appendChild(infoAdultos);
  habitacionPredeterminada.appendChild(adultos);

  var elegirAdultos = document.createElement("input");
  elegirAdultos.setAttribute("type", "number");
  elegirAdultos.setAttribute("id", "totalAdultos");
  elegirAdultos.setAttribute("min", 1);
  elegirAdultos.setAttribute("max", 3);
  elegirAdultos.setAttribute("value", 2);
  habitacionPredeterminada.appendChild(elegirAdultos);

  var ninos = document.createElement("p");
  var infoNinos = document.createTextNode("Niños (0-17 años): ");
  ninos.appendChild(infoNinos);
  habitacionPredeterminada.appendChild(ninos);

  var elegirNinos = elegirAdultos.cloneNode();
  elegirNinos.setAttribute("type", "number");
  elegirNinos.setAttribute("id", "totalNinos");
  elegirNinos.setAttribute("min", 0);
  elegirNinos.setAttribute("max", 4);
  elegirNinos.setAttribute("value", 0);
  habitacionPredeterminada.appendChild(elegirNinos);

  ejecucionModal.style.visibility = "hidden";
  botonExtra.addEventListener("click", habitacionExtra);
  document.getElementById("totalNinos").addEventListener("change", edadNino);
}

function habitacionExtra() {
  if (limitador < 3) {
    limitador++;

    var habitacionClonada = habitacionPredeterminada.cloneNode(true);
    habitacionClonada.firstChild.remove();
    
    var botonEliminar = document.createElement("button");
    var infoBotonEliminar = document.createTextNode("Eliminar habitación");
    botonEliminar.setAttribute("type", "button");
    botonEliminar.setAttribute("id", "botonExtra");
    botonEliminar.setAttribute("class", "btn btn-danger m-2");
    botonEliminar.appendChild(infoBotonEliminar);

    contenidoRow.appendChild(habitacionClonada);
    habitacionClonada.appendChild(botonEliminar);
  }
  botonEliminar.addEventListener("click", habitacionBorrada);
  habitacionClonada.lastChild.previousSibling.addEventListener("change", edadNino);
}

function habitacionBorrada() {
  limitador--;
  contenidoRow.lastChild.remove();
}

function edadNino(event) {
  var seleccion = event.target;
  var valor = seleccion.value;
  var edades = seleccion.parentNode.querySelectorAll("#edad");

  if (edades != null) {
    edades.forEach(b => b.parentNode.removeChild(b));
  }
  var padre = seleccion.parentNode;
  var refer = seleccion.nextElementSibling;

  for (var i = 0; i < valor; i++) {
    var elegirEdad = document.createElement("input");
    elegirEdad.setAttribute("type", "number");
    elegirEdad.setAttribute("class", "m-1");
    elegirEdad.setAttribute("id", "edad");
    elegirEdad.setAttribute("value", 1);
    elegirEdad.setAttribute("min", 1);
    elegirEdad.setAttribute("max", 17);
    padre.insertBefore(elegirEdad, refer);
  }
}

function guardarDatos() {
  var seleccionaHabitacion = document.querySelectorAll(".contar");
  var totalHabitaciones = document.querySelectorAll(".contar").length;
  var arrayTotalHuespedes = [];
  for (var i = 0; i < totalHabitaciones; i++) {
    arrayTotalHuespedes.push(
      parseInt(seleccionaHabitacion[i].querySelector("#totalAdultos").value)
    );
    arrayTotalHuespedes.push(
      parseInt(seleccionaHabitacion[i].querySelector("#totalNinos").value)
    );
  }

  var totalHuespedes = arrayTotalHuespedes.reduce((a, b) => a + b, 0);
  document.getElementById(
    "nHabitaciones"
  ).value = `${totalHabitaciones} habitaciones, ${totalHuespedes} huéspedes`;

  seleccionaHabitacion.forEach(a => a.parentNode.remove());
  guardarCambios.style.visibility = "hidden";
}

function resultadoFinal () {
  var nombreHotel = document.getElementById("nHotel").value;
  var fecha = document.getElementById("fLlegada").value;
  var numNoches = document.getElementById("listaNoches").value;
  var habiHuesped = document.getElementById("nHabitaciones").value;

  console.log("Nombre de hotel: " + nombreHotel);
  console.log("Fecha de entrada: " + fecha);
  console.log("Número de noches: " + numNoches);
  console.log("Habitaciones y Huéspedes: " + habiHuesped);
}