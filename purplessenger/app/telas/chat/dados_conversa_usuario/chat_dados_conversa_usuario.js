$(document).ready(function() {
  $(".dados-conversa-usuario-cancela").click(function() {
    $(".dados-conversa-usuario").fadeOut(0);
    $(".icon-enviar-anexo-none").removeClass("icon-enviar-anexo-none-aplica");
    $(".caixa-opcao-conversa-usuario").removeClass(
      "caixa-opcao-conversa-usuario-aplica"
    );
    $(".dados-conversa-usuario-conteudo-perfil").removeClass(
      "dados-conversa-usuario-conteudo-perfil-aplica"
    );
  });

  $(".dados-conversa-usuario-conteudo-perfil").click(function() {
    $(".visualiza-foto-usuario-perfil").fadeIn(0);
  });

  $(".arquivos-enviados-recebidos-linha-um-text").click(function() {
    $(".arquivos-conversa-usuario").fadeIn(0);
    $(".dados-conversa-usuario").fadeOut(0);
  });

  $(".arquivos-enviados-recebidos-linha-um-icon").click(function() {
    $(".arquivos-conversa-usuario").fadeIn(0);
    $(".dados-conversa-usuario").fadeOut(0);
  });

  $(".arquivos-enviados-recebidos-linha-dois-img").click(function() {
    $(".visualiza-foto-arquivo-perfil").fadeIn(0);
    var img = $(this).attr("src");
    $(".visualiza-foto-arquivo-perfil-menu-img-grande").attr("src", img);
  });
});
