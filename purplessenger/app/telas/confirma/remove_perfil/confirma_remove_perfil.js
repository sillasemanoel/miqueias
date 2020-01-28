$(document).ready(function() {
  $(".fundo-confirma-remove-perfil").click(function() {
    $(".confirma-remove-perfil-none").fadeOut(0);
  });

  $(".caixa-confirma-remove-perfil-menu-cancela").click(function() {
    $(".confirma-remove-perfil-none").fadeOut(0);
  });

  $(".botao-confirma-remove-perfil").click(function() {
    $(".confirma-remove-perfil-none").fadeOut(0);
    $(
      ".lado-esquerdo-perfil-campo-img, .menu-chat-img, .visualiza-foto-meu-perfil-menu-img, .configuracoes-perfil-img, .eu-participando-grupo-perfil"
    ).css("background-image", "url(" + "" + ")");
    $(".visualiza-foto-meu-perfil-menu-img-grande").attr("src", "");
  });
});
