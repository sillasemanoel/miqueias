$(document).ready(function() {
  $(".lado-esquerdo-perfil-campo-model").click(function() {
    $("#opc-do-altera-perfil").fadeOut(0);
    $("#opc-do-altera-perfil02").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-model").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-img-hover").fadeIn(0);
    $(".lado-esquerdo-perfil-campo-img-sem-hover").fadeOut(0);
  });

  $(".lado-esquerdo-perfil-menu").click(function() {
    $("#opc-do-altera-perfil").fadeOut(0);
    $("#opc-do-altera-perfil02").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-model").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-img-hover").fadeIn(0);
    $(".lado-esquerdo-perfil-campo-img-sem-hover").fadeOut(0);
  });

  $(".lado-esquerdo-perfil-menu-seta").click(function() {
    $(".perfil").fadeOut(0);
    $(".index-esquerdo").fadeIn(0);
    $(".lado-esquerdo-perfil-texto-campo").fadeOut(0);
    $(".confere-nome").fadeOut(0);
    $(".lado-esquerdo-perfil-texto-user-texto").fadeIn();
    $(".caneta-nome").fadeIn();
    $(".lado-esquerdo-perfil-sobre-altera-nome").css("border-bottom", "0px");
    $(".lado-esquerdo-perfil-recado-campo").fadeOut(0);
    $(".confere-recado").fadeOut(0);
    $(".lado-esquerdo-perfil-texto-recado-texto").fadeIn();
    $(".caneta-recado").fadeIn();
    $(".lado-esquerdo-perfil-sobre-altera-recado").css("border-bottom", "0px");
    $(".lado-esquerdo-perfil-campo-img").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-img").removeClass(
      "lado-esquerdo-perfil-campo-img-aplica"
    );
  });

  $(".lado-esquerdo-perfil-menu-seta-config").click(function() {
    $(".perfil").fadeOut(0);
    $(".configuracoes").fadeIn(0);
    $(".lado-esquerdo-perfil-texto-campo").fadeOut(0);
    $(".confere-nome").fadeOut(0);
    $(".lado-esquerdo-perfil-texto-user-texto").fadeIn();
    $(".caneta-nome").fadeIn();
    $(".lado-esquerdo-perfil-sobre-altera-nome").css("border-bottom", "0px");
    $(".lado-esquerdo-perfil-recado-campo").fadeOut(0);
    $(".confere-recado").fadeOut(0);
    $(".lado-esquerdo-perfil-texto-recado-texto").fadeIn();
    $(".caneta-recado").fadeIn();
    $(".lado-esquerdo-perfil-sobre-altera-recado").css("border-bottom", "0px");
    $(".lado-esquerdo-perfil-campo-img").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-img").removeClass(
      "lado-esquerdo-perfil-campo-img-aplica"
    );
  });

  $(".lado-esquerdo-perfil-campo-img-hover").hover(function() {
    $(".lado-esquerdo-perfil-campo-img-hover-img").fadeToggle(0);
    $(".lado-esquerdo-perfil-campo-img-hover-text").fadeToggle(0);
  });

  $(".lado-esquerdo-perfil-campo-img-hover").on("click", function(e) {
    $(".lado-esquerdo-perfil-campo-img-hover").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-img-sem-hover").fadeIn(0);
    $(".lado-esquerdo-perfil-campo-model").fadeIn(0);
    $("#opc-do-altera-perfil02").fadeOut(0);
    $("#opc-do-altera-perfil").fadeIn(0);
    var y = e.clientY;
    var localizay = y + 0;
    var x = e.clientX;
    var localizax = x + 0;
    console.log(e);
    document.getElementById("opc-do-altera-perfil").style.left = x + "px";
    document.getElementById("opc-do-altera-perfil").style.top = y + "px";
  });

  $(".lado-esquerdo-perfil-campo-img-sem-hover").on("click", function(e) {
    $("#opc-do-altera-perfil").fadeOut(0);
    $("#opc-do-altera-perfil02").addClass("animated zoomIn");
    setTimeout(function() {
      $("#opc-do-altera-perfil02").removeClass("animated zoomIn");
    }, 500);
    $("#opc-do-altera-perfil02").fadeIn(0);
    var y = e.clientY;
    var localizay = y + 0;
    var x = e.clientX;
    var localizax = x + 0;
    console.log(e);
    document.getElementById("opc-do-altera-perfil02").style.left = x + "px";
    document.getElementById("opc-do-altera-perfil02").style.top = y + "px";
  });

  $(".opc-do-altera-perfil-p01").click(function() {
    $(".lado-esquerdo-perfil-campo-img-sem-hover").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-img-hover").fadeIn(0);
    $("#opc-do-altera-perfil").fadeOut(0);
    $("#opc-do-altera-perfil02").fadeOut(0);
    $(".visualiza-foto-meu-perfil").fadeIn(0);
  });

  $(".opc-do-altera-perfil-p02").click(function() {
    $(".input_file").trigger("click");
    $(".lado-esquerdo-perfil-campo-img-sem-hover").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-img-hover").fadeIn(0);
    $("#opc-do-altera-perfil").fadeOut(0);
    $("#opc-do-altera-perfil02").fadeOut(0);
  });

  $(".input_file").bind("input", function() {
    var d = $(this).val();
    if (d != "") {
      $(".confirma-altera-perfil-none").fadeIn(0);
    }
  });

  $(".input_file").change(function() {
    const file = $(this)[0].files[0];
    if (file) {
      prever_imagem_selecionada(file);
    }
  });

  $(".opc-do-altera-perfil-p03").click(function() {
    $(".lado-esquerdo-perfil-campo-img-sem-hover").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-img-hover").fadeIn(0);
    $("#opc-do-altera-perfil").fadeOut(0);
    $("#opc-do-altera-perfil02").fadeOut(0);
    $(".confirma-remove-perfil-none").fadeIn(0);
  });

  $(".lado-esquerdo-perfil-sobre-pac01").click(function() {
    $("#opc-do-altera-perfil").fadeOut(0);
    $("#opc-do-altera-perfil02").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-model").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-img-hover").fadeIn(0);
    $(".lado-esquerdo-perfil-campo-img-sem-hover").fadeOut(0);
  });

  $(".caneta-nome").click(function() {
    $(".lado-esquerdo-perfil-texto-user-texto").fadeOut(0);
    $(".caneta-nome").fadeOut(0);
    $(".lado-esquerdo-perfil-texto-campo").fadeIn();
    $(".confere-nome").fadeIn();
    $(".lado-esquerdo-perfil-sobre-altera-nome").css(
      "border-bottom",
      "2px solid #943ce6"
    );
    $(".lado-esquerdo-perfil-campo-user").trigger("focus");
  });

  $(".confere-nome").click(function() {
    $(".lado-esquerdo-perfil-texto-campo").fadeOut(0);
    $(".confere-nome").fadeOut(0);
    $(".lado-esquerdo-perfil-texto-user-texto").fadeIn();
    $(".caneta-nome").fadeIn();
    $(".lado-esquerdo-perfil-sobre-altera-nome").css("border-bottom", "0px");
  });

  $(".lado-esquerdo-perfil-sobre-pac03").click(function() {
    $("#opc-do-altera-perfil").fadeOut(0);
    $("#opc-do-altera-perfil02").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-model").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-img-hover").fadeIn(0);
    $(".lado-esquerdo-perfil-campo-img-sem-hover").fadeOut(0);
  });

  $(".caneta-recado").click(function() {
    $(".lado-esquerdo-perfil-texto-recado-texto").fadeOut(0);
    $(".caneta-recado").fadeOut(0);
    $(".lado-esquerdo-perfil-recado-campo").fadeIn();
    $(".confere-recado").fadeIn();
    $(".lado-esquerdo-perfil-sobre-altera-recado").css(
      "border-bottom",
      "2px solid #943ce6"
    );
    $(".lado-esquerdo-perfil-campo-recado").trigger("focus");
  });

  $(".confere-recado").click(function() {
    $(".lado-esquerdo-perfil-recado-campo").fadeOut(0);
    $(".confere-recado").fadeOut(0);
    $(".lado-esquerdo-perfil-texto-recado-texto").fadeIn();
    $(".caneta-recado").fadeIn();
    $(".lado-esquerdo-perfil-sobre-altera-recado").css("border-bottom", "0px");
  });

  // index direito
  $(".index-direito").click(function() {
    $("#opc-do-altera-perfil").fadeOut(0);
    $("#opc-do-altera-perfil02").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-model").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-img-hover").fadeIn(0);
    $(".lado-esquerdo-perfil-campo-img-sem-hover").fadeOut(0);
  });

  // conversa usuario
  $(".conversa-usuario").click(function() {
    $("#opc-do-altera-perfil").fadeOut(0);
    $("#opc-do-altera-perfil02").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-model").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-img-hover").fadeIn(0);
    $(".lado-esquerdo-perfil-campo-img-sem-hover").fadeOut(0);
  });

  // dados de conversa usuario
  $(".dados-conversa-usuario").click(function() {
    $("#opc-do-altera-perfil").fadeOut(0);
    $("#opc-do-altera-perfil02").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-model").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-img-hover").fadeIn(0);
    $(".lado-esquerdo-perfil-campo-img-sem-hover").fadeOut(0);
  });

  // arquivos de conversa usuario
  $(".arquivos-conversa-usuario").click(function() {
    $("#opc-do-altera-perfil").fadeOut(0);
    $("#opc-do-altera-perfil02").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-model").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-img-hover").fadeIn(0);
    $(".lado-esquerdo-perfil-campo-img-sem-hover").fadeOut(0);
  });

  // conversa grupo
  $(".conversa-grupo").click(function() {
    $("#opc-do-altera-perfil").fadeOut(0);
    $("#opc-do-altera-perfil02").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-model").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-img-hover").fadeIn(0);
    $(".lado-esquerdo-perfil-campo-img-sem-hover").fadeOut(0);
  });

  // dados de conversa grupo
  $(".dados-conversa-grupo").click(function() {
    $("#opc-do-altera-perfil").fadeOut(0);
    $("#opc-do-altera-perfil02").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-model").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-img-hover").fadeIn(0);
    $(".lado-esquerdo-perfil-campo-img-sem-hover").fadeOut(0);
  });

  // arquivos de conversa grupo
  $(".arquivos-conversa-grupo").click(function() {
    $("#opc-do-altera-perfil").fadeOut(0);
    $("#opc-do-altera-perfil02").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-model").fadeOut(0);
    $(".lado-esquerdo-perfil-campo-img-hover").fadeIn(0);
    $(".lado-esquerdo-perfil-campo-img-sem-hover").fadeOut(0);
  });
});
