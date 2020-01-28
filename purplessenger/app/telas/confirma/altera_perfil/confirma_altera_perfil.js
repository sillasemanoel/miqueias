$(document).ready(function() {
  $(".fundo-confirma-altera-perfil").click(function() {
    $(".confirma-altera-perfil-none").fadeOut(0);
  });

  $(".caixa-confirma-altera-perfil-menu-cancela").click(function() {
    $(".confirma-altera-perfil-none").fadeOut(0);
  });

  $(".caixa-confirma-altera-perfil-menu-tentanov").click(function() {
    $(".input_file").trigger("click");
  });

  $(".caixa-confirma-altera-perfil-menu-tentanov-text").click(function() {
    $(".input_file").trigger("click");
  });

  let result;

  $(".botao-confirma-altera-perfil").click(function() {
    definir_imagem_selecionada();
    $(".confirma-altera-perfil-none").fadeOut(0);
  });
});

/**
 * salva
 *
 * @param {String} result
 */
function definir_imagem_selecionada() {
  $(
    ".lado-esquerdo-perfil-campo-img, .menu-chat-img, .visualiza-foto-meu-perfil-menu-img, .configuracoes-perfil-img, .eu-participando-grupo-perfil"
  ).css("background-image", "url(" + result + ")");
  $(".visualiza-foto-meu-perfil-menu-img-grande").attr("src", result);
}

/**
 * recebe o file para porcessar o base64 em seguida mostra no modal
 *
 * @param {FileReader} file
 */
function prever_imagem_selecionada(file) {
  const fileReader = new FileReader();
  fileReader.onloadend = function() {
    // seta o base64 no result
    result = fileReader.result;

    $(".caixa-confirma-altera-perfil-foto").attr("src", fileReader.result);
  };
  fileReader.readAsDataURL(file);
}
