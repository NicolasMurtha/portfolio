const botao = document.querySelector('.btn-mostrar-projetos')
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')



botao.addEventListener('click', () => {
  projetosInativos.forEach(projetosInativo => {

    if (projetosInativo.classList.contains('ativo')) {
      projetosInativo.classList.remove('ativo')
      botao.innerHTML = "Mostrar mais"
    } else {
      projetosInativo.classList.add('ativo')
      botao.innerHTML = "Mostrar menos"
    }
  });
})


