const equiposLigaEspañola = [
  "Real Madrid",
  "FC Barcelona",
  "Atlético de Madrid",
  "Sevilla FC",
  "Real Sociedad",
  "Real Betis",
  "Athletic Club",
  "Valencia CF",
  "Villarreal CF",
  "Celta de Vigo",
  "Getafe CF",
  "RCD Espanyol",
  "CA Osasuna",
  "Granada CF",
  "Deportivo Alavés",
  "RCD Mallorca",
  "Cádiz CF",
  "Girona FC",
  "UD Las Palmas",
  "Levante UD"
];

const busqueda = document.getElementById('busqueda');
const sugerencias = document.getElementById('sugerencias');

busqueda.addEventListener('input', function() {
  const texto = this.value.toLowerCase();
  sugerencias.innerHTML = '';
  if (texto.length > 0) {
    const filtrados = equiposLigaEspañola.filter(equipo =>
      equipo.toLowerCase().includes(texto)
    );
    if (filtrados.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'No se encontró ningún equipo 😕';
      li.style.color = '#888';
      sugerencias.appendChild(li);
    } else {
      filtrados.forEach(equipo => {
        const li = document.createElement('li');
        li.textContent = equipo;
        li.onclick = function() {
          busqueda.value = equipo;
          sugerencias.innerHTML = '';
        };
        sugerencias.appendChild(li);
      });
    }
  }
});

// Cerrar sugerencias al hacer click fuera
document.addEventListener('click', function(e) {
  if (!document.querySelector('.search-card').contains(e.target)) {
    sugerencias.innerHTML = '';
  }
});