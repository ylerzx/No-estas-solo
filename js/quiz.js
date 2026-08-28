// Lógica del quiz: una pregunta a la vez, feedback inmediato, resultado final.
(function () {
  const UMBRAL = 0.10; // 10% de aciertos para "aprobar"

  const stage = document.getElementById("quiz-stage");
  const progressFill = document.getElementById("quiz-progress-fill");
  const progressLabel = document.getElementById("quiz-progress-label");

  let indice = 0;
  let aciertos = 0;
  let respondida = false;

  function renderPregunta() {
    respondida = false;
    const data = QUIZ_DATA[indice];
    const total = QUIZ_DATA.length;

    progressLabel.textContent = `Pregunta ${indice + 1} de ${total}`;
    progressFill.style.width = `${(indice / total) * 100}%`;

    const opcionesHTML = data.opciones
      .map((op, i) => `<li><button class="quiz__option" data-i="${i}">${op}</button></li>`)
      .join("");

    stage.innerHTML = `
      <div class="quiz__question" id="quiz-q">
        <h3>${data.pregunta}</h3>
        <ul class="quiz__options">${opcionesHTML}</ul>
        <div class="quiz__feedback" id="quiz-feedback"></div>
        <button class="btn btn-primary quiz__next" id="quiz-next">Siguiente pregunta →</button>
      </div>
    `;

    stage.querySelectorAll(".quiz__option").forEach((btn) => {
      btn.addEventListener("click", () => responder(btn));
    });
    document.getElementById("quiz-next").addEventListener("click", siguiente);
  }

  function responder(btnClicado) {
    if (respondida) return;
    respondida = true;

    const data = QUIZ_DATA[indice];
    const elegido = Number(btnClicado.dataset.i);
    const esCorrecta = elegido === data.correcta;
    if (esCorrecta) aciertos++;

    stage.querySelectorAll(".quiz__option").forEach((btn, i) => {
      btn.disabled = true;
      if (i === data.correcta) btn.classList.add("is-correct");
      else if (i === elegido) btn.classList.add("is-incorrect");
    });

    const fb = document.getElementById("quiz-feedback");
    fb.classList.add("show");
    if (esCorrecta) {
      fb.classList.add("quiz__feedback--ok");
      fb.innerHTML = `<strong>¡Correcto!</strong> ${data.correccion}`;
    } else {
      fb.classList.add("quiz__feedback--bad");
      fb.innerHTML = `<strong>No exactamente.</strong> ${data.correccion}`;
    }

    document.getElementById("quiz-next").classList.add("show");
  }

  function siguiente() {
    const actual = document.getElementById("quiz-q");
    actual.classList.add("is-leaving");
    setTimeout(() => {
      indice++;
      if (indice < QUIZ_DATA.length) {
        renderPregunta();
      } else {
        mostrarResultado();
      }
    }, 280);
  }

  function mostrarResultado() {
    const total = QUIZ_DATA.length;
    progressFill.style.width = "100%";
    progressLabel.textContent = `Completado: ${aciertos} de ${total}`;

    const porcentaje = aciertos / total;
    const aprobado = porcentaje >= UMBRAL;

    if (aprobado) {
      stage.innerHTML = `
        <div class="quiz__result">
          <div class="quiz__result-icon" aria-hidden="true">💛</div>
          <div class="quiz__score">${aciertos} de ${total} respuestas correctas</div>
          <h3>Gracias por tomarte el tiempo de leer y aprender</h3>
          <p>
            Sabemos que puede ser difícil, pero no estás solo o sola. Pedir ayuda es un acto de
            valentía, no de debilidad.<br><br>
            Eres importante y vales. Sea lo que sea que estés atravesando, puedes afrontarlo —
            y no tenés que hacerlo en soledad. Pedí ayuda.
          </p>
          <a href="#directorio" class="btn btn-outline" style="border-color:#FFB800;color:#FFB800">Ver líneas de ayuda</a>
        </div>
      `;
    } else {
      stage.innerHTML = `
        <div class="quiz__result">
          <div class="quiz__result-icon" aria-hidden="true">🌱</div>
          <div class="quiz__score">${aciertos} de ${total} respuestas correctas</div>
          <h3>No te rindas — sabemos que puedes lograrlo</h3>
          <p>Repasa el contenido con calma y vuelve a intentarlo cuando quieras.</p>
          <button class="btn btn-primary" id="quiz-restart">Reintentar quiz</button>
        </div>
      `;
      document.getElementById("quiz-restart").addEventListener("click", reiniciar);
    }
  }

  function reiniciar() {
    indice = 0;
    aciertos = 0;
    renderPregunta();
  }

  renderPregunta();
})();
