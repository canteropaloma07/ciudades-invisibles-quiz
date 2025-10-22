const questions = [
  {
    q: "Cuando pensás en tu ciudad ideal, ¿qué te gustaría que nunca cambiara?",
    options: {
      Zaira: "Sus historias y recuerdos.",
      Zora: "Su belleza perfecta, inalterable.",
      Maurilia: "La memoria de lo que alguna vez fue.",
      Eutropia: "Que siempre haya algo nuevo que descubrir.",
      Fedora: "Que existan infinitas versiones posibles de ella."
    }
  },
  {
    q: "Si pudieras guardar algo de tu ciudad en una caja para el futuro, ¿qué pondrías?",
    options: {
      Maurilia: "Fotos de momentos vividos.",
      Eutropia: "Un mapa que cambie con el tiempo.",
      Fedora: "Un cristal con todas las ciudades que imaginé.",
      Zaira: "Las voces de quienes pasaron por sus calles.",
      Zora: "Un recuerdo perfecto, congelado para siempre."
    }
  },
  {
    q: "¿Qué te emociona más al viajar?",
    options: {
      Zaira: "Caminar sobre huellas del pasado.",
      Maurilia: "Comparar lo que era con lo que es ahora.",
      Eutropia: "Descubrir que nada es igual dos veces.",
      Fedora: "Imaginar las ciudades que podrían haber existido.",
      Zora: "Encontrar un lugar tan hermoso que no quiera olvidarlo nunca."
    }
  },
  {
    q: "¿Qué te produce más tristeza?",
    options: {
      Maurilia: "Que el tiempo borre las huellas del pasado.",
      Zora: "Que nada permanezca igual.",
      Zaira: "Que olvidemos a quienes nos dieron forma.",
      Fedora: "Que haya cosas que nunca lleguen a ser.",
      Eutropia: "Que todo cambie sin aviso."
    }
  }
];

const cityDescriptions = {
  Zaira: "Eres Zaira, la ciudad de la memoria. Cada rincón guarda un eco, cada muro recuerda un rostro. Tu ciudad eres tú, tejida con los hilos del recuerdo.",
  Zora: "Eres Zora, la ciudad perfecta. Buscás la belleza que no cambia, pero sabés que lo eterno puede desvanecerse.",
  Maurilia: "Eres Maurilia, la ciudad nostálgica. Caminás entre postales del pasado, sintiendo la dulzura de lo perdido.",
  Eutropia: "Eres Eutropia, la ciudad cambiante. Nunca sos la misma persona; cada día te reinventás.",
  Fedora: "Eres Fedora, la ciudad de los sueños posibles. Dentro de ti viven todas las vidas que aún no fueron."
};

const quizDiv = document.getElementById("quiz");

questions.forEach((item, index) => {
  const div = document.createElement("div");
  div.classList.add("question");
  div.innerHTML = `<h3>${index + 1}. ${item.q}</h3>`;
  for (let [city, text] of Object.entries(item.options)) {
    div.innerHTML += `
      <label class="option">
        <input type="radio" name="q${index}" value="${city}" required> ${text}
      </label>`;
  }
  quizDiv.appendChild(div);
});

document.getElementById("quizForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const scores = { Zaira: 0, Zora: 0, Maurilia: 0, Eutropia: 0, Fedora: 0 };

  for (let value of formData.values()) {
    scores[value]++;
  }

  const topCity = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  document.getElementById("quizForm").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("cityName").textContent = topCity;
  document.getElementById("cityDesc").textContent = cityDescriptions[topCity];
});
