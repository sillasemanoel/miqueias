$(document).ready(function() {
  $(".ajuda-menu-seta").click(function() {
    $(".ajuda").fadeOut(0);
    $(".configuracoes").fadeIn(0);
    $(".conteudo-ajuda").fadeIn(0);
    $(".relatar-bug").fadeIn(0);
    $(".campo-relatar-bug").fadeOut(0);
    $(".campo-relatar-bug-text").val("");
    $(".status-de-report").fadeOut(0);
  });

  $(".relatar-bug").click(function() {
    $(".conteudo-ajuda").fadeOut(0);
    $(".relatar-bug").fadeOut(0);
    $(".campo-relatar-bug").fadeIn(0);
    $(".campo-relatar-bug-text").trigger("focus");
  });

  $(".relatar-bug-cancela").click(function() {
    $(".conteudo-ajuda").fadeIn(0);
    $(".relatar-bug").fadeIn(0);
    $(".campo-relatar-bug").fadeOut(0);
    $(".campo-relatar-bug-text").val("");
    $(".status-de-report").fadeOut(0);
  });

  $(".campo-relatar-bug-botao").click(function() {
    if ($(".campo-relatar-bug-text").val() == "") {
      $(".status-de-report-nd").fadeIn(0);
      setTimeout(function() {
        $(".status-de-report-nd").fadeOut(400);
      }, 1000);
      $(".status-de-report").fadeOut(0);
    } else {
      $(".campo-relatar-bug-text").val("");
      $(".status-de-report").fadeIn(0);
      setTimeout(function() {
        $(".status-de-report").fadeOut(400);
      }, 1000);
      $(".status-de-report-nd").fadeOut(0);
    }
  });
});
