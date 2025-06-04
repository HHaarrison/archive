function iniciarContador(id, fechaObjetivoStr) {
  const elemento = document.getElementById(id);
   const fechaObjetivo = new Date(fechaObjetivoStr).getTime();

function actualizar() {
    const ahora = new Date().getTime();
    const distancia = fechaObjetivo - ahora;

      if (distancia <= 0) {
      elemento.innerHTML = "¡Terminado!";
      elemento.classList.add("terminado");
      return;
        }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    elemento.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
     }

   actualizar();
  setInterval(actualizar, 1000);
}

iniciarContador("contador1", "June 11, 2025 15:30:00");
iniciarContador("contador2", "June 4, 2025 15:30:00");
iniciarContador("contador3", "June 9, 2025 00:00:00");
iniciarContador("terminado", "June 1, 2025 18:30:00");
iniciarContador("contador5", "June 16, 2025 18:30:00");
