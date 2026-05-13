const statusTexto = document.getElementById("status");

function falar(texto){

  const fala = new SpeechSynthesisUtterance(texto);

  // voz pt-BR
  const vozes = speechSynthesis.getVoices();

  const vozBR = vozes.find(
    voz => voz.lang === "pt-BR"
  );

  if(vozBR){
    fala.voice = vozBR;
  }

  // velocidade
  fala.rate = 1;

  // tom
  fala.pitch = 1;

  // indicador visual
  fala.onstart = () => {
    statusTexto.innerText = "Assistente falando...";
    statusTexto.classList.add("falando");
  };

  fala.onend = () => {
    statusTexto.innerText = "Parado";
    statusTexto.classList.remove("falando");
  };

  speechSynthesis.speak(fala);
}

function sendToAI(texto){
  
  // resposta falsa
  return "Você disse: " + texto;
}

function enviar(){

  const texto = document.getElementById("texto").value;

  const resposta = sendToAI(texto);

  falar(resposta);
}
