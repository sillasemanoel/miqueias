$(document).ready(function() {
  $(".conversa-grupo-menu-img").click(function() {
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
    $(".dados-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").addClass(
      "icon-enviar-anexo-grupo-none-aplica"
    );
    $(".caixa-opcao-conversa-grupo").addClass(
      "caixa-opcao-conversa-grupo-aplica"
    );
    $(".perfil-grupo-campo-img").fadeIn(0);
    $(".perfil-grupo-campo-img").addClass("perfil-grupo-campo-img-aplica");
  });

  $(".conversa-grupo-menu-linhamento").click(function() {
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
    $(".dados-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").addClass(
      "icon-enviar-anexo-grupo-none-aplica"
    );
    $(".caixa-opcao-conversa-grupo").addClass(
      "caixa-opcao-conversa-grupo-aplica"
    );
    $(".perfil-grupo-campo-img").fadeIn(0);
    $(".perfil-grupo-campo-img").addClass("perfil-grupo-campo-img-aplica");
  });

  $(".anexar-img-conversa-grupo").click(function() {
    $(".anexar-img-conversa-grupo").fadeOut(0);
    $(".anexar-img-conversa-grupo-hover").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeIn(2);
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
  });

  $(".anexar-img-conversa-grupo-hover").click(function() {
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
  });

  var $input_file_anexar_grupo = $(".input_file_anexar_grupo");
  var $btn_icon_enviar_anexo_grupo_none = $(".icon-enviar-anexo-grupo-none");

  $btn_icon_enviar_anexo_grupo_none.click(function() {
    $input_file_anexar_grupo.trigger("click");
  });

  $(".input_file_anexar_grupo").change(function() {
    const file = $(this)[0].files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function() {
      $(".pre-visualizar-grupo-conteudo-img").attr("src", fileReader.result);
    };
    fileReader.readAsDataURL(file);
  });

  $(".input_file_anexar_grupo").bind("input", function() {
    var d = $(this).val();
    if (d != "") {
      $(".conteudo-conversa-grupo").fadeOut(0);
      $(".rodape-envia-msg-conversa-grupo").fadeOut(0);
      $(".anexar-img-conversa-grupo-hover").fadeOut(0);
      $(".anexar-img-conversa-grupo").fadeIn(0);
      $(".icon-enviar-anexo-grupo-none").fadeOut(0);
      $(".pre-visualizar-grupo").fadeIn(0);
      $(".pre-visualizar-grupo-conteudo-text").trigger("focus");
    } else {
      $(".conteudo-conversa-grupo").fadeIn(0);
      $(".rodape-envia-msg-conversa-grupo").fadeIn(0);
      $(".pre-visualizar-grupo").fadeOut(0);
    }
  });

  $(".opcoes-conversa-grupo").click(function() {
    $(".opcoes-conversa-grupo").fadeOut(0);
    $(".opcoes-conversa-grupo-hover").fadeIn(0);
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
    $(".caixa-opcao-conversa-grupo").fadeIn(0);
  });

  $(".opcoes-conversa-grupo-hover").click(function() {
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
  });

  $(".caixa-opcao-conversa-grupo").click(function() {
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
    $(".dados-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").addClass(
      "icon-enviar-anexo-grupo-none-aplica"
    );
    $(".caixa-opcao-conversa-grupo").addClass(
      "caixa-opcao-conversa-grupo-aplica"
    );
    $(".perfil-grupo-campo-img").fadeIn(0);
    $(".perfil-grupo-campo-img").addClass("perfil-grupo-campo-img-aplica");
  });

  $(".pre-visualizar-grupo-cancela").click(function() {
    $(".pre-visualizar-grupo").fadeOut(0);
    $(".input_file_anexar_grupo").val("");
    $(".pre-visualizar-grupo-conteudo-text").val("");
    $(".conteudo-conversa-grupo").fadeIn(0);
    $(".rodape-envia-msg-conversa-grupo").fadeIn(0);
    $(".pre-visualizar-grupo-conteudo-img").attr("src", "");
  });

  $(".pre-visualizar-grupo-confirma-botao").click(function() {
    $(".pre-visualizar-grupo").fadeOut(0);
    $(".input_file_anexar_grupo").val("");
    $(".pre-visualizar-grupo-conteudo-text").val("");
    $(".conteudo-conversa-grupo").fadeIn(0);
    $(".rodape-envia-msg-conversa-grupo").fadeIn(0);
    $(".pre-visualizar-grupo-conteudo-img").attr("src", "");
  });

  $(".conteudo-conversa-grupo").click(function() {
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
  });

  $(".msg-conversa-grupo-nuvem-campo-img").click(function() {
    $(".visualiza-foto-arquivo-grupo-perfil").fadeIn(0);
    var img = $(this).attr("src");
    $(".visualiza-foto-arquivo-grupo-perfil-menu-img-grande").attr("src", img);
  });

  $(".rodape-envia-msg-conversa-grupo").click(function() {
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
  });

  $(".rodape-envia-msg-conversa-grupo-campo").bind("input", function() {
    var d = $(this).val();
    if (d != "") {
      $(".botao-rodape-envia-msg-conversa-grupo-img").fadeIn(0);
      $(".conteudo-conversa-grupo").addClass("conteudo-conversa-grupo-aplica");
      $(".rodape-envia-msg-conversa-grupo").addClass(
        "rodape-envia-msg-conversa-grupo-aplica"
      );
      $(".rodape-envia-msg-conversa-grupo-campo-campo").addClass(
        "rodape-envia-msg-conversa-grupo-campo-campo-aplica"
      );
      $(".rodape-envia-msg-conversa-grupo-campo").addClass(
        "rodape-envia-msg-conversa-grupo-campo-aplica"
      );
    } else {
      $(".botao-rodape-envia-msg-conversa-grupo-img").fadeOut(0);
      $(".conteudo-conversa-grupo").removeClass(
        "conteudo-conversa-grupo-aplica"
      );
      $(".rodape-envia-msg-conversa-grupo").removeClass(
        "rodape-envia-msg-conversa-grupo-aplica"
      );
      $(".rodape-envia-msg-conversa-grupo-campo-campo").removeClass(
        "rodape-envia-msg-conversa-grupo-campo-campo-aplica"
      );
      $(".rodape-envia-msg-conversa-grupo-campo").removeClass(
        "rodape-envia-msg-conversa-grupo-campo-aplica"
      );
    }
  });

  // index esquerdo
  $(".index-esquerdo").click(function() {
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
  });

  // perfil
  $(".perfil").click(function() {
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
  });

  // usuario
  $(".lado-esquerdo-todas-conversas").click(function() {
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
  });

  // novo grupo tela um
  $(".novo-grupo-um").click(function() {
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
  });

  // novo grupo tela dois
  $(".novo-grupo-dois").click(function() {
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
  });

  // novo grupo tela um copia
  $(".novo-grupo-um-copia").click(function() {
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
  });

  // novo grupo tela dois copia
  $(".novo-grupo-dois-copia").click(function() {
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
  });

  // configuracoes
  $(".configuracoes").click(function() {
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
  });

  // perfil copia
  $(".perfil-copia").click(function() {
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
  });

  // papel de parede da conversa
  $(".papel-de-parede").click(function() {
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
  });

  // ajuda
  $(".ajuda").click(function() {
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
  });

  // dados de conversa do grupo
  $(".dados-conversa-grupo").click(function() {
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
  });

  // arquivos de conversa grupo
  $(".arquivos-conversa-grupo").click(function() {
    $(".anexar-img-conversa-grupo-hover").fadeOut(0);
    $(".anexar-img-conversa-grupo").fadeIn(0);
    $(".icon-enviar-anexo-grupo-none").fadeOut(0);
    $(".opcoes-conversa-grupo-hover").fadeOut(0);
    $(".opcoes-conversa-grupo").fadeIn(0);
    $(".caixa-opcao-conversa-grupo").fadeOut(0);
  });
});
