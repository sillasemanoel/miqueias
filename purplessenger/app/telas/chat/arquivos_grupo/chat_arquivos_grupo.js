$(document).ready(function() {
  $(".arquivos-conversa-grupo-menu-seta").click(function() {
    $(".arquivos-conversa-grupo").fadeOut(0);
    $(".dados-conversa-grupo").fadeIn(0);
  });

  $(".arquivos-conversa-grupo-conteudo-midia").click(function() {
    $(".visualiza-foto-arquivo-grupo-perfil").fadeIn(0);
    var img = $(this).attr("src");
    $(".visualiza-foto-arquivo-grupo-perfil-menu-img-grande").attr("src", img);
  });
});
