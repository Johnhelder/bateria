//Criando evento
document.body.addEventListener('keyup', (event)=>{
  
  playSound(event.code.toLowerCase());
});

//Iniciar o som
function playSound(sound){
  let audioElement = document.querySelector(`#s_${sound}`);

  if(audioElement){
    audioElement.play();
  }
}