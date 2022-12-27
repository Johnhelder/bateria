//Criando evento
document.body.addEventListener('keyup', (event)=>{
  
  playSound(event.code.toLowerCase());
});

//Iniciar o som
function playSound(sound){
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  if(audioElement){
    audioElement.play();
  }  
}