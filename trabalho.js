document.querySelector('.caixa1').onmouseover = function() {
    var mensagem = document.createElement('caixa'); 
    mensagem.textContent = 'hitler-a-carreir'; 
    document.body.appendChild(mensagem);
  }