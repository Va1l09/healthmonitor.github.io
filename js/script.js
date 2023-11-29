class Medicion {
  constructor(nombre, type, value, date, comments) {
    this.type = type;
    this.value = value;
    this.date = date;
    this.comments = comments;
  }
}

const mediciones = [];

function agregarMedicion() {
  const type = document.getElementById('type').value;
  const value = document.getElementById('value').value;
  const date = document.getElementById('date').value;
  const comments = document.getElementById('comments').value;

  const nuevaMedicion = new Medicion(type, value, date, comments);
  mediciones.push(nuevaMedicion);
  mostrarResultado(`Medición de ${type} agregada correctamente.`);
}

function consultarMediciones() {
  mostrarResultado('Mediciones registradas:');
  mediciones.forEach(medicion => {
    mostrarResultado(`Tipo: ${medicion.type}, Valor: ${medicion.value}, Fecha: ${medicion.date}, Comentarios: ${medicion.comments}`);
  });
}

function borrarMedicion(indice) {
  if (mediciones.length === 0) {
    mostrarResultado('No hay mediciones para borrar.');
    return;
  }
  if (indice < 0 || indice >= mediciones.length) {
    mostrarResultado('Índice de medición no válido.');
    return;
  }
  const medicionBorrada = mediciones.splice(indice, 1)[0];
  mostrarResultado(`Medición de ${medicionBorrada.type} en el índice ${indice} borrada.`);
}

function mostrarResultado(mensaje) {
  document.getElementById('resultado').innerHTML += `<p>${mensaje}</p>`;
}
