//Criando evento
document.body.addEventListener('keyup', (event)=>{
  
});

//Iniciar o som
function playSound(sound){
  let audioElement = document.querySelector(`#s_${sound}`);

  if(audioElement){
    audioElement.play();
  }
}