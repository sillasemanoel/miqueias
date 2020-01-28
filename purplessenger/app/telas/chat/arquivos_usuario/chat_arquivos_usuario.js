$(document).ready(function() {
  $(".arquivos-conversa-usuario-menu-seta").click(function() {
    $(".arquivos-conversa-usuario").fadeOut(0);
    $(".dados-conversa-usuario").fadeIn(0);
  });

  $(".arquivos-conversa-usuario-conteudo-midia").click(function() {
    $(".visualiza-foto-arquivo-perfil").fadeIn(0);
    var img = $(this).attr("src");
    $(".visualiza-foto-arquivo-perfil-menu-img-grande").attr("src", img);
  });
});
