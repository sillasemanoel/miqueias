$(document).ready(function() {
  $(".fundo-confirma-remove-perfil-grupo").click(function() {
    $(".confirma-remove-perfil-grupo-none").fadeOut(0);
  });

  $(".caixa-confirma-remove-perfil-grupo-menu-cancela").click(function() {
    $(".confirma-remove-perfil-grupo-none").fadeOut(0);
  });

  $(".botao-confirma-remove-perfil-grupo").click(function() {
    $(".confirma-remove-perfil-grupo-none").fadeOut(0);
    $(
      ".jaconversa-chat-img-grupo, .conversa-grupo-menu-img, .perfil-grupo-campo-img, .visualiza-foto-grupo-perfil-menu-img"
    ).css("background-image", "url(" + "" + ")");
    $(".visualiza-foto-grupo-perfil-menu-img-grande").attr("src", "");
  });
});
