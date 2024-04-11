const botao = document.querySelector('.btn-mostrar-projetos')
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

botao.addEventListener('click', () => {
  projetosInativos.forEach(projetosInativo => {
    projetosInativo.classList.add('ativo')
    botao.innerHTML = "Mostrar menos"
  });


  botao.addEventListener('click', () => {
    projetosInativos.forEach(projetosInativo => {
      projetosInativo.classList.remove('ativo')
      botao.innerHTML = "Mostrar mais"
    });
  })
})


