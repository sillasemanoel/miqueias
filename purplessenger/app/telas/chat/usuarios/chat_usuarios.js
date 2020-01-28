$(document).ready(function() {
  $(".lado-esquerdo-todas-conversas-menu").click(function() {
    $(".lado-esquerdo-todas-conversas-busca-lupa-img").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca-seta-img").fadeOut(0);
    $(".lado-esquerdo-todas-conversas-busca").css(
      "background-color",
      "#f7f7f7"
    );
  });

  $(".lado-esquerdo-todas-conversas-seta").click(function() {
    $(".lado-esquerdo-todas-conversas").fadeOut(0);
    $(".index-esquerdo").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca-lupa-img").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca-seta-img").fadeOut(0);
    $(".lado-esquerdo-todas-conversas-busca").css(
      "background-color",
      "#f7f7f7"
    );
    $(".lado-esquerdo-todas-conversas-busca-campo").val("");
    pesquisar("");
  });

  $(".lado-esquerdo-todas-conversas-busca-lupa-img").click(function() {
    $(".lado-esquerdo-todas-conversas-busca-lupa-img").fadeOut(0);
    $(".lado-esquerdo-todas-conversas-busca-seta-img").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca").css("background-color", "#fff");
    $(".lado-esquerdo-todas-conversas-busca-campo").trigger("focus");
  });

  $(".lado-esquerdo-todas-conversas-busca-seta-img").click(function() {
    $(".lado-esquerdo-todas-conversas-busca-lupa-img").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca-seta-img").fadeOut(0);
    $(".lado-esquerdo-todas-conversas-busca").css(
      "background-color",
      "#f7f7f7"
    );
    $(".lado-esquerdo-todas-conversas-busca-campo").val("");
    pesquisar("");
  });

  $(".lado-esquerdo-todas-conversas-busca-campo").click(function() {
    $(".lado-esquerdo-todas-conversas-busca-lupa-img").fadeOut(0);
    $(".lado-esquerdo-todas-conversas-busca-seta-img").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca").css("background-color", "#fff");
  });

  $(".lado-esquerdo-todas-conversas-busca-campo").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    pesquisar(value);
  });

  function pesquisar(value) {
    $(".todos-os-usuarios .no-busca").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  }

  $(".wide").click(function() {
    $(".lado-esquerdo-todas-conversas-busca-lupa-img").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca-seta-img").fadeOut(0);
    $(".lado-esquerdo-todas-conversas-busca").css(
      "background-color",
      "#f7f7f7"
    );
  });

  $(".novo-grupo").click(function() {
    $(".lado-esquerdo-todas-conversas").fadeOut(0);
    $(".novo-grupo-um").fadeIn(0);
    $(".novo-grupo-um-seta-opc").fadeOut(0);
    $(".novo-grupo-um-seta").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca-lupa-img").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca-seta-img").fadeOut(0);
    $(".lado-esquerdo-todas-conversas-busca").css(
      "background-color",
      "#f7f7f7"
    );
    $(".lado-esquerdo-todas-conversas-busca-campo").val("");
    pesquisar("");
  });

  $(".nome-usuarios").click(function() {
    $(".lado-esquerdo-todas-conversas-busca-lupa-img").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca-seta-img").fadeOut(0);
    $(".lado-esquerdo-todas-conversas-busca").css(
      "background-color",
      "#f7f7f7"
    );
  });

  $(".todos-os-usuarios").click(function() {
    $(".lado-esquerdo-todas-conversas-busca-lupa-img").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca-seta-img").fadeOut(0);
    $(".lado-esquerdo-todas-conversas-busca").css(
      "background-color",
      "#f7f7f7"
    );
  });

  $(".lado-esquerdo-todas-conversas-jaconversa-chat").click(function() {
    $(".index-esquerdo").fadeIn(0);
    $(".lado-esquerdo-todas-conversas").fadeOut(0);
    $(".lado-esquerdo-todas-conversas-busca-lupa-img").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca-seta-img").fadeOut(0);
    $(".lado-esquerdo-todas-conversas-busca").css(
      "background-color",
      "#f7f7f7"
    );
    $(".lado-esquerdo-todas-conversas-busca-campo").val("");
    pesquisar("");
    $(".index-direito").fadeOut(0);
    $(".conversa-usuario").fadeIn(0);
    $(".conversa-grupo").fadeOut(0);
  });

  // index direito
  $(".index-direito").click(function() {
    $(".lado-esquerdo-todas-conversas-busca-lupa-img").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca-seta-img").fadeOut(0);
    $(".lado-esquerdo-todas-conversas-busca").css(
      "background-color",
      "#f7f7f7"
    );
  });

  // conversa usuario
  $(".conversa-usuario").click(function() {
    $(".lado-esquerdo-todas-conversas-busca-lupa-img").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca-seta-img").fadeOut(0);
    $(".lado-esquerdo-todas-conversas-busca").css(
      "background-color",
      "#f7f7f7"
    );
  });

  // dados de conversa usuario
  $(".dados-conversa-usuario").click(function() {
    $(".lado-esquerdo-todas-conversas-busca-lupa-img").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca-seta-img").fadeOut(0);
    $(".lado-esquerdo-todas-conversas-busca").css(
      "background-color",
      "#f7f7f7"
    );
  });

  // arquivos de conversa usuario
  $(".arquivos-conversa-usuario").click(function() {
    $(".lado-esquerdo-todas-conversas-busca-lupa-img").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca-seta-img").fadeOut(0);
    $(".lado-esquerdo-todas-conversas-busca").css(
      "background-color",
      "#f7f7f7"
    );
  });

  // conversa grupo
  $(".conversa-grupo").click(function() {
    $(".lado-esquerdo-todas-conversas-busca-lupa-img").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca-seta-img").fadeOut(0);
    $(".lado-esquerdo-todas-conversas-busca").css(
      "background-color",
      "#f7f7f7"
    );
  });

  // dados de conversa grupo
  $(".dados-conversa-grupo").click(function() {
    $(".lado-esquerdo-todas-conversas-busca-lupa-img").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca-seta-img").fadeOut(0);
    $(".lado-esquerdo-todas-conversas-busca").css(
      "background-color",
      "#f7f7f7"
    );
  });

  // arquivos de conversa grupo
  $(".arquivos-conversa-grupo").click(function() {
    $(".lado-esquerdo-todas-conversas-busca-lupa-img").fadeIn(0);
    $(".lado-esquerdo-todas-conversas-busca-seta-img").fadeOut(0);
    $(".lado-esquerdo-todas-conversas-busca").css(
      "background-color",
      "#f7f7f7"
    );
  });
});
