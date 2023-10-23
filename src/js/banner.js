/* 
  OBJETIVO - ao clicar no botão, mostrar a imagem de fundo correspondente

  - passo 1 - encontrar uma forma de pegar o elemento HTML dos botões
  - passo 2 - dar um jeito de identificar o clique do usuário no botão
  - passo 3 - desmarcar o botão selecionado anteriormente
  - passo 4 - marcar o botão selecionado como se estivesse selecionado
  - passo 5 - esconder a imagem de fundo anterior
  - passo 6 - fazer aparecer a imagem de fundo correspondete ao botão clicado
*/

// Passo 1 - Pegar os elementos HTML dos botões e imagens
const botoes = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Passo 2 - Adicionar um evento de clique para cada botão
botoes.forEach((botao, index) => {
  botao.addEventListener('click', () => {
    trocarImagem(index);
  });
});

// Função para trocar a imagem pelo índice
function trocarImagem(index) {
  // Passo 3 - Desmarcar o botão selecionado anteriormente
  const botaoAtivo = document.querySelector('.botao.selecionado');
  if (botaoAtivo) {
    botaoAtivo.classList.remove('selecionado');
  }

  // Passo 4 - Marcar o botão atual como selecionado
  botoes[index].classList.add('selecionado');

  // Passo 5 - Esconder a imagem de fundo anterior
  imagens.forEach((imagem) => {
    imagem.classList.remove('ativa');
  });

  // Passo 6 - Mostrar a imagem de fundo correspondente ao botão clicado
  imagens[index].classList.add('ativa');
}

// Configurar a troca automática de imagens com um intervalo de 3 segundos (3000 milissegundos)
let currentIndex = 0; // Índice da imagem atual
let interval = setInterval(() => {
  currentIndex++; // Avança para a próxima imagem
  if (currentIndex >= imagens.length) {
    currentIndex = 0; // Volta para a primeira imagem se atingir o fim
  }
  trocarImagem(currentIndex);
}, 3000); // Intervalo de 3 segundos

// Função para interromper a troca automática quando o mouse passar sobre as imagens
imagens.forEach((imagem) => {
  imagem.addEventListener('mouseenter', () => {
    clearInterval(interval);
  });

  imagem.addEventListener('mouseleave', () => {
    // Reiniciar a troca automática quando o mouse sair da imagem
    interval = setInterval(() => {
      currentIndex++;
      if (currentIndex >= imagens.length) {
        currentIndex = 0;
      }
      trocarImagem(currentIndex);
    }, 3000);
  });
});
