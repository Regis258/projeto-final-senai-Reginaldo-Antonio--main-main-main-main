$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop:true,
        onSliderLoaded: function(){
            $('#autoWidth').removeClass('cS-hidden');
        }
    })
});

//função do clico do menu

function clickMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{
        itens.style.display = 'block' ;
    }
}
function toggleLogin() {
    var login = document.getElementById("login");
    login.classList.toggle("active");
  }
//pegando os botões 
// Obtendo uma lista de todos os botões com a classe .botao
let botoes = document.querySelectorAll(".produtosAll");

// Iterando sobre cada botão para adicionar o ouvinte de evento de clique
botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        // Obtendo o span contador dentro do contêiner deste botão
        let spanContador = this.parentNode.querySelector(".contadorSpan");

        // Pegando o valor atual do contador e adicionando +1
        let valorAtual = parseInt(spanContador.innerText);
        valorAtual += 1;

        // Atualizando o conteúdo do span com o novo valor
        spanContador.innerText = valorAtual;
    });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "0px 0"; /* Adiciona um espaçamento superior quando o usuário rolar a página */
  } else {
    document.getElementById("header").style.padding = "0px 0"; /* Altere conforme necessário */
  }
}

