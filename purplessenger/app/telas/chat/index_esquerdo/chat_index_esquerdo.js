$(document).ready(function() {
  $(".menu-chat").click(function() {
    $(".busca-chat-lupa-img").fadeIn(0);
    $(".busca-chat-seta-img").fadeOut(0);
    $(".busca-chat").css("background-color", "#f7f7f7");
  });

  $(".campo-menu-chat-img").click(function() {
    $(".opc-do-menu-block").fadeOut(0);
    $(".menu-chat-opc-hover").fadeOut(0);
    $(".menu-chat-opc").fadeIn(0);
  });

  $(".menu-chat-img").click(function() {
    $(".index-esquerdo").fadeOut(0);
    $(".perfil").fadeIn(0);
    $(".lado-esquerdo-perfil-menu-seta-config").fadeOut(0);
    $(".lado-esquerdo-perfil-menu-seta").fadeIn(0);
    $(".lado-esquerdo-perfil-campo-img").fadeIn(0);
    $(".lado-esquerdo-perfil-campo-img").addClass(
      "lado-esquerdo-perfil-campo-img-aplica"
    );
    $(".lado-esquerdo-perfil-sobre-pac01").addClass("bounceInDown");
    $(".lado-esquerdo-perfil-sobre-pac02").addClass("bounceInDown");
    $(".lado-esquerdo-perfil-sobre-pac03").addClass("bounceInDown");
    $(".busca-chat-campo").val("");
    pesquisar("");
  });

  $(".menu-chat-usuarios").click(function() {
    $(".index-esquerdo").fadeOut(0);
    $(".lado-esquerdo-todas-conversas").fadeIn(0);
    $(".opc-do-menu-block").fadeOut(0);
    $(".menu-chat-opc-hover").fadeOut(0);
    $(".menu-chat-opc").fadeIn(0);
    $(".busca-chat-campo").val("");
    pesquisar("");
  });

  $(".menu-chat-opc").click(function() {
    $(".opc-do-menu-block").fadeIn(0);
    $(".menu-chat-opc").fadeOut(0);
    $(".menu-chat-opc-hover").fadeIn(0);
  });

  $(".menu-chat-opc-hover").click(function() {
    $(".opc-do-menu-block").fadeOut(0);
    $(".menu-chat-opc-hover").fadeOut(0);
    $(".menu-chat-opc").fadeIn(0);
  });

  $(".opc-do-menu-block01").click(function() {
    $(".index-esquerdo").fadeOut(0);
    $(".perfil").fadeIn(0);
    $(".lado-esquerdo-perfil-menu-seta-config").fadeOut(0);
    $(".lado-esquerdo-perfil-menu-seta").fadeIn(0);
    $(".lado-esquerdo-perfil-campo-img").fadeIn(0);
    $(".lado-esquerdo-perfil-campo-img").addClass(
      "lado-esquerdo-perfil-campo-img-aplica"
    );
    $(".opc-do-menu-block").fadeOut(0);
    $(".menu-chat-opc-hover").fadeOut(0);
    $(".menu-chat-opc").fadeIn(0);
    $(".busca-chat-campo").val("");
    pesquisar("");
  });

  $(".opc-do-menu-block02").click(function() {
    $(".index-esquerdo").fadeOut(0);
    $(".novo-grupo-um").fadeIn(0);
    $(".novo-grupo-um-seta").fadeOut(0);
    $(".novo-grupo-um-seta-opc").fadeIn(0);
    $(".opc-do-menu-block").fadeOut(0);
    $(".menu-chat-opc-hover").fadeOut(0);
    $(".menu-chat-opc").fadeIn(0);
    $(".busca-chat-campo").val("");
    pesquisar("");
  });

  $(".opc-do-menu-block03").click(function() {
    $(".index-esquerdo").fadeOut(0);
    $(".configuracoes").fadeIn(0);
    $(".opc-do-menu-block").fadeOut(0);
    $(".menu-chat-opc-hover").fadeOut(0);
    $(".menu-chat-opc").fadeIn(0);
    $(".busca-chat-campo").val("");
    pesquisar("");
  });

  $(".busca-chat").click(function() {
    $(".opc-do-menu-block").fadeOut(0);
    $(".menu-chat-opc-hover").fadeOut(0);
    $(".menu-chat-opc").fadeIn(0);
  });

  $(".busca-chat-lupa-img").click(function() {
    $(".busca-chat-lupa-img").fadeOut(0);
    $(".busca-chat-seta-img").fadeIn(0);
    $(".busca-chat").css("background-color", "#fff");
    $(".busca-chat-campo").trigger("focus");
  });

  $(".busca-chat-seta-img").click(function() {
    $(".busca-chat-lupa-img").fadeIn(0);
    $(".busca-chat-seta-img").fadeOut(0);
    $(".busca-chat").css("background-color", "#f7f7f7");
    $(".busca-chat-campo").val("");
    pesquisar("");
  });

  $(".busca-chat-campo").click(function() {
    $(".busca-chat-lupa-img").fadeOut(0);
    $(".busca-chat-seta-img").fadeIn(0);
    $(".busca-chat").css("background-color", "#fff");
  });

  $(".busca-chat-campo").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    pesquisar(value);
  });

  function pesquisar(value) {
    $(".jaconversass-chat .no-busca").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  }

  $(".jaconversass-chat").click(function() {
    $(".opc-do-menu-block").fadeOut(0);
    $(".menu-chat-opc-hover").fadeOut(0);
    $(".menu-chat-opc").fadeIn(0);
    $(".busca-chat-lupa-img").fadeIn(0);
    $(".busca-chat-seta-img").fadeOut(0);
    $(".busca-chat").css("background-color", "#f7f7f7");
  });

  $(".jaconversa-chat").click(function() {
    $(".opc-do-menu-block").fadeOut(0);
    $(".busca-chat-campo").val("");
    $(".index-direito").fadeOut(0);
    $(".conversa-grupo").fadeOut(0);
    $(".conversa-usuario").fadeIn(0);
    pesquisar("");
    $(".dados-conversa-grupo").fadeOut(0);
    $(".arquivos-conversa-grupo").fadeOut(0);
    $(".icon-enviar-anexo-grupo-none").removeClass(
      "icon-enviar-anexo-grupo-none-aplica"
    );
    $(".caixa-opcao-conversa-grupo").removeClass(
      "caixa-opcao-conversa-grupo-aplica"
    );
    $(".perfil-grupo-campo-img").removeClass("perfil-grupo-campo-img-aplica");
  });

  $(".jaconversa-chat-grupo").click(function() {
    $(".opc-do-menu-block").fadeOut(0);
    $(".busca-chat-campo").val("");
    $(".index-direito").fadeOut(0);
    $(".conversa-usuario").fadeOut(0);
    $(".conversa-grupo").fadeIn(0);
    pesquisar("");
    $(".emoji_box").fadeOut(0);
    $(".fecha_add_figure").fadeOut(0);
    $(".abre_emoji").fadeIn(0);
    $(".abre_emoji_color").fadeOut(0);
    $(".add_gif").fadeOut(0);
    $(".add_gif_color").fadeOut(0);
    $(".add_figure").fadeOut(0);
    $(".add_figure_color").fadeOut(0);
    $(".rodape-envia-msg-conversa-usuario-campo-campo").removeClass(
      "rodape-envia-msg-conversa-usuario-campo-campo-aplica_figure"
    );
    $(".dados-conversa-usuario").fadeOut(0);
    $(".arquivos-conversa-usuario").fadeOut(0);
    $(".icon-enviar-anexo-none").removeClass("icon-enviar-anexo-none-aplica");
    $(".caixa-opcao-conversa-usuario").removeClass(
      "caixa-opcao-conversa-usuario-aplica"
    );
    $(".dados-conversa-usuario-conteudo-perfil").removeClass(
      "dados-conversa-usuario-conteudo-perfil-aplica"
    );
  });

  // index direito
  $(".index-direito").click(function() {
    $(".opc-do-menu-block").fadeOut(0);
    $(".menu-chat-opc-hover").fadeOut(0);
    $(".menu-chat-opc").fadeIn(0);
    $(".busca-chat-lupa-img").fadeIn(0);
    $(".busca-chat-seta-img").fadeOut(0);
    $(".busca-chat").css("background-color", "#f7f7f7");
  });

  // conversa usuario
  $(".conversa-usuario").click(function() {
    $(".opc-do-menu-block").fadeOut(0);
    $(".menu-chat-opc-hover").fadeOut(0);
    $(".menu-chat-opc").fadeIn(0);
    $(".busca-chat-lupa-img").fadeIn(0);
    $(".busca-chat-seta-img").fadeOut(0);
    $(".busca-chat").css("background-color", "#f7f7f7");
  });

  // dados de conversa usuario
  $(".dados-conversa-usuario").click(function() {
    $(".opc-do-menu-block").fadeOut(0);
    $(".menu-chat-opc-hover").fadeOut(0);
    $(".menu-chat-opc").fadeIn(0);
    $(".busca-chat-lupa-img").fadeIn(0);
    $(".busca-chat-seta-img").fadeOut(0);
    $(".busca-chat").css("background-color", "#f7f7f7");
  });

  // arquivos de conversa usuario
  $(".arquivos-conversa-usuario").click(function() {
    $(".opc-do-menu-block").fadeOut(0);
    $(".menu-chat-opc-hover").fadeOut(0);
    $(".menu-chat-opc").fadeIn(0);
    $(".busca-chat-lupa-img").fadeIn(0);
    $(".busca-chat-seta-img").fadeOut(0);
    $(".busca-chat").css("background-color", "#f7f7f7");
  });

  // conversa grupo
  $(".conversa-grupo").click(function() {
    $(".opc-do-menu-block").fadeOut(0);
    $(".menu-chat-opc-hover").fadeOut(0);
    $(".menu-chat-opc").fadeIn(0);
    $(".busca-chat-lupa-img").fadeIn(0);
    $(".busca-chat-seta-img").fadeOut(0);
    $(".busca-chat").css("background-color", "#f7f7f7");
  });

  // dados de conversa grupo
  $(".dados-conversa-grupo").click(function() {
    $(".opc-do-menu-block").fadeOut(0);
    $(".menu-chat-opc-hover").fadeOut(0);
    $(".menu-chat-opc").fadeIn(0);
    $(".busca-chat-lupa-img").fadeIn(0);
    $(".busca-chat-seta-img").fadeOut(0);
    $(".busca-chat").css("background-color", "#f7f7f7");
  });

  // arquivos de conversa grupo
  $(".arquivos-conversa-grupo").click(function() {
    $(".opc-do-menu-block").fadeOut(0);
    $(".menu-chat-opc-hover").fadeOut(0);
    $(".menu-chat-opc").fadeIn(0);
    $(".busca-chat-lupa-img").fadeIn(0);
    $(".busca-chat-seta-img").fadeOut(0);
    $(".busca-chat").css("background-color", "#f7f7f7");
  });
});
