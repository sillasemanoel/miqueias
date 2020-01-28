$(document).ready(function() {
  $(".conversa-usuario-menu-img").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
    $(".dados-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").addClass("icon-enviar-anexo-none-aplica");
    $(".caixa-opcao-conversa-usuario").addClass(
      "caixa-opcao-conversa-usuario-aplica"
    );
    $(".dados-conversa-usuario-conteudo-perfil").addClass(
      "dados-conversa-usuario-conteudo-perfil-aplica"
    );
  });

  $(".conversa-usuario-menu-user").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
    $(".dados-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").addClass("icon-enviar-anexo-none-aplica");
    $(".caixa-opcao-conversa-usuario").addClass(
      "caixa-opcao-conversa-usuario-aplica"
    );
    $(".dados-conversa-usuario-conteudo-perfil").addClass(
      "dados-conversa-usuario-conteudo-perfil-aplica"
    );
  });

  $(".anexar-img-conversa-usuario").click(function() {
    $(".anexar-img-conversa-usuario").fadeOut(0);
    $(".anexar-img-conversa-usuario-hover").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeIn(2);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
  });

  $(".anexar-img-conversa-usuario-hover").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
  });

  var $input_file_anexar = $(".input_file_anexar");
  var $btn_icon_enviar_anexo_none = $(".icon-enviar-anexo-none");

  $btn_icon_enviar_anexo_none.click(function() {
    $input_file_anexar.trigger("click");
  });

  $(".input_file_anexar").change(function() {
    const file = $(this)[0].files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function() {
      $(".pre-visualizar-conteudo-img").attr("src", fileReader.result);
    };
    fileReader.readAsDataURL(file);
  });

  $(".input_file_anexar").bind("input", function() {
    var d = $(this).val();
    if (d != "") {
      $(".conteudo-conversa-usuario").fadeOut(0);
      $(".rodape-envia-msg-conversa-usuario").fadeOut(0);
      $(".anexar-img-conversa-usuario-hover").fadeOut(0);
      $(".anexar-img-conversa-usuario").fadeIn(0);
      $(".icon-enviar-anexo-none").fadeOut(0);
      $(".pre-visualizar").fadeIn(0);
      $(".pre-visualizar-conteudo-text").trigger("focus");
    } else {
      $(".conteudo-conversa-usuario").fadeIn(0);
      $(".rodape-envia-msg-conversa-usuario").fadeIn(0);
      $(".pre-visualizar-grupo").fadeOut(0);
    }
  });

  $(".opcoes-conversa-usuario").click(function() {
    $(".opcoes-conversa-usuario").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeIn(0);
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".caixa-opcao-conversa-usuario").fadeIn(0);
  });

  $(".opcoes-conversa-usuario-hover").click(function() {
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
  });

  $(".caixa-opcao-conversa-usuario").click(function() {
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
    $(".dados-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").addClass("icon-enviar-anexo-none-aplica");
    $(".caixa-opcao-conversa-usuario").addClass(
      "caixa-opcao-conversa-usuario-aplica"
    );
    $(".dados-conversa-usuario-conteudo-perfil").addClass(
      "dados-conversa-usuario-conteudo-perfil-aplica"
    );
  });

  $(".pre-visualizar").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
  });

  $(".pre-visualizar-cancela").click(function() {
    $(".pre-visualizar").fadeOut(0);
    $(".input_file_anexar").val("");
    $(".pre-visualizar-conteudo-text").val("");
    $(".conteudo-conversa-usuario").fadeIn(0);
    $(".rodape-envia-msg-conversa-usuario").fadeIn(0);
    $(".pre-visualizar-conteudo-img").attr("src", "");
  });

  $(".pre-visualizar-confirma-botao").click(function() {
    $(".pre-visualizar").fadeOut(0);
    $(".input_file_anexar").val("");
    $(".pre-visualizar-conteudo-text").val("");
    $(".conteudo-conversa-usuario").fadeIn(0);
    $(".rodape-envia-msg-conversa-usuario").fadeIn(0);
    $(".pre-visualizar-conteudo-img").attr("src", "");
  });

  $(".conteudo-conversa-usuario").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
  });

  $(".msg-conversa-usuario-nuvem-campo-img").click(function() {
    $(".visualiza-foto-arquivo-perfil").fadeIn(0);
    var img = $(this).attr("src");
    $(".visualiza-foto-arquivo-perfil-menu-img-grande").attr("src", img);
  });

  $(".rodape-envia-msg-conversa-usuario").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
  });

  $(".abre_emoji").click(function() {
    $(".emoji_box").fadeIn(0);
    $(".fecha_add_figure").fadeIn(0);
    $(".abre_emoji").fadeOut(0);
    $(".abre_emoji_color").fadeIn(0);
    $(".add_gif").fadeIn(0);
    $(".add_gif_color").fadeOut(0);
    $(".add_figure").fadeIn(0);
    $(".add_figure_color").fadeOut(0);
    $(".rodape-envia-msg-conversa-usuario-campo-campo").addClass(
      "rodape-envia-msg-conversa-usuario-campo-campo-aplica_figure"
    );
  });

  $(".fecha_add_figure").click(function() {
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
  });

  $(".add_gif").click(function() {
    $(".emoji_box").fadeOut(0);
    $(".fecha_add_figure").fadeIn(0);
    $(".abre_emoji").fadeIn(0);
    $(".abre_emoji_color").fadeOut(0);
    $(".add_gif").fadeOut(0);
    $(".add_gif_color").fadeIn(0);
    $(".add_figure").fadeIn(0);
    $(".add_figure_color").fadeOut(0);
    $(".rodape-envia-msg-conversa-usuario-campo-campo").addClass(
      "rodape-envia-msg-conversa-usuario-campo-campo-aplica_figure"
    );
  });

  $(".add_figure").click(function() {
    $(".emoji_box").fadeOut(0);
    $(".fecha_add_figure").fadeIn(0);
    $(".abre_emoji").fadeIn(0);
    $(".abre_emoji_color").fadeOut(0);
    $(".add_gif").fadeIn(0);
    $(".add_gif_color").fadeOut(0);
    $(".add_figure").fadeOut(0);
    $(".add_figure_color").fadeIn(0);
    $(".rodape-envia-msg-conversa-usuario-campo-campo").addClass(
      "rodape-envia-msg-conversa-usuario-campo-campo-aplica_figure"
    );
  });

  $(".rodape-envia-msg-conversa-usuario-campo").bind("input", function() {
    var d = $(this).val();
    if (d != "") {
      $(".botao-rodape-envia-msg-conversa-usuario-img").fadeIn(0);
      $(".conteudo-conversa-usuario").addClass(
        "conteudo-conversa-usuario-aplica"
      );
      $(".rodape-envia-msg-conversa-usuario").addClass(
        "rodape-envia-msg-conversa-usuario-aplica"
      );
      $(".rodape-envia-msg-conversa-usuario-campo-campo").addClass(
        "rodape-envia-msg-conversa-usuario-campo-campo-aplica"
      );
      $(".rodape-envia-msg-conversa-usuario-campo").addClass(
        "rodape-envia-msg-conversa-usuario-campo-aplica"
      );
      $(".emoji_box").addClass("emoji_box_aplica");
    } else {
      $(".botao-rodape-envia-msg-conversa-usuario-img").fadeOut(0);
      $(".conteudo-conversa-usuario").removeClass(
        "conteudo-conversa-usuario-aplica"
      );
      $(".rodape-envia-msg-conversa-usuario").removeClass(
        "rodape-envia-msg-conversa-usuario-aplica"
      );
      $(".rodape-envia-msg-conversa-usuario-campo-campo").removeClass(
        "rodape-envia-msg-conversa-usuario-campo-campo-aplica"
      );
      $(".rodape-envia-msg-conversa-usuario-campo").removeClass(
        "rodape-envia-msg-conversa-usuario-campo-aplica"
      );
      $(".emoji_box").removeClass("emoji_box_aplica");
    }
  });

  // index esquerdo
  $(".index-esquerdo").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
  });

  // perfil
  $(".perfil").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
  });

  // usuarios
  $(".lado-esquerdo-todas-conversas").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
  });

  // novo grupo tela um
  $(".novo-grupo-um").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
  });

  // novo grupo tela dois
  $(".novo-grupo-dois").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
  });

  // novo grupo tela um copia
  $(".novo-grupo-um-copia").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
  });

  // novo grupo tela dois copia
  $(".novo-grupo-dois-copia").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
  });

  // configuracoes
  $(".configuracoes").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
  });

  // perfil copia
  $(".perfil-copia").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
  });

  // papel de parede da conversa
  $(".papel-de-parede").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
  });

  // ajuda
  $(".ajuda").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
  });

  // dados de conversa do usuario
  $(".dados-conversa-usuario").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
  });

  // arquivos de conversa usuario
  $(".arquivos-conversa-usuario").click(function() {
    $(".anexar-img-conversa-usuario-hover").fadeOut(0);
    $(".anexar-img-conversa-usuario").fadeIn(0);
    $(".icon-enviar-anexo-none").fadeOut(0);
    $(".opcoes-conversa-usuario-hover").fadeOut(0);
    $(".opcoes-conversa-usuario").fadeIn(0);
    $(".caixa-opcao-conversa-usuario").fadeOut(0);
  });
});
