$(document).ready(function() {
  $(".fundo-confirma-altera-perfil-grupo").click(function() {
    $(".confirma-altera-perfil-grupo-none").fadeOut(0);
  });

  $(".caixa-confirma-altera-perfil-grupo-menu-cancela").click(function() {
    $(".confirma-altera-perfil-grupo-none").fadeOut(0);
  });

  $(".caixa-confirma-altera-perfil-grupo-menu-tentanov").click(function() {
    $(".input_file_grupo").trigger("click");
  });

  $(".caixa-confirma-altera-perfil-grupo-menu-tentanov-text").click(function() {
    $(".input_file_grupo").trigger("click");
  });

  let result;

  $(".botao-confirma-altera-perfil-grupo").click(function() {
    definir_imagem_selecionada_grupo();
    $(".confirma-altera-perfil-grupo-none").fadeOut(0);
  });
});

/**
 * salva
 *
 * @param {String} result
 */
function definir_imagem_selecionada_grupo() {
  $(
    ".jaconversa-chat-img-grupo, .conversa-grupo-menu-img, .perfil-grupo-campo-img, .visualiza-foto-grupo-perfil-menu-img"
  ).css("background-image", "url(" + result + ")");
  $(".visualiza-foto-grupo-perfil-menu-img-grande").attr("src", result);
}

/**
 * recebe o file para porcessar o base64 em seguida mostra no modal
 *
 * @param {FileReader} file
 */
function prever_imagem_selecionada_grupo(file) {
  const fileReader = new FileReader();
  fileReader.onloadend = function() {
    // seta o base64 no result
    result = fileReader.result;

    $(".caixa-confirma-altera-perfil-grupo-foto").attr(
      "src",
      fileReader.result
    );
  };
  fileReader.readAsDataURL(file);
}
