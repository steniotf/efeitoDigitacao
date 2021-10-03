// Efeito máquina de escrever
function escrever(elemento){
  
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML= ''; 
  
  textoArray.forEach(function(valor, index) {

    setTimeout(function(){
      elemento.innerHTML += valor

    },200 * index)
  });
}
  let titulo = document.querySelector('h1')
  escrever(titulo);