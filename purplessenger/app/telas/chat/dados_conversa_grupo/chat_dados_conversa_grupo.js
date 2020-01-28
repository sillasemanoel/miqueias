$(document).ready(function() {
  $(".dados-conversa-grupo-cancela").click(function() {
    $(".dados-conversa-grupo").fadeOut(0);
    $(".icon-enviar-anexo-grupo-none").removeClass(
      "icon-enviar-anexo-grupo-none-aplica"
    );
    $(".caixa-opcao-conversa-grupo").removeClass(
      "caixa-opcao-conversa-grupo-aplica"
    );
    $(".perfil-grupo-campo-img").fadeOut(0);
    $(".perfil-grupo-campo-img").removeClass("perfil-grupo-campo-img-aplica");
  });

  $(".perfil-grupo-campo-model").click(function() {
    $("#opc-do-altera-perfil-grupo").fadeOut(0);
    $("#opc-do-altera-perfil-grupo02").fadeOut(0);
    $(".perfil-grupo-campo-model").fadeOut(0);
    $(".perfil-grupo-campo-img-hover").fadeIn(0);
    $(".perfil-grupo-campo-img-sem-hover").fadeOut(0);
  });

  $(".perfil-grupo-campo-img").hover(function() {
    $(".perfil-grupo-campo-img-hover-img").fadeToggle(0);
    $(".perfil-grupo-campo-img-hover-text").fadeToggle(0);
  });

  $(".perfil-grupo-campo-img-hover").on("click", function(e) {
    $(".perfil-grupo-campo-img-hover").fadeOut(0);
    $(".perfil-grupo-campo-img-sem-hover").fadeIn(0);
    $(".perfil-grupo-campo-model").fadeIn(0);
    $("#opc-do-altera-perfil-grupo02").fadeOut(0);
    $("#opc-do-altera-perfil-grupo").fadeIn(0);
    var y = e.clientY;
    var localizay = y + 0;
    var x = e.clientX;
    var localizax = x + 0;
    console.log(e);
    document.getElementById("opc-do-altera-perfil-grupo").style.left = x + "px";
    document.getElementById("opc-do-altera-perfil-grupo").style.top = y + "px";
  });

  $(".perfil-grupo-campo-img-sem-hover").on("click", function(e) {
    $("#opc-do-altera-perfil-grupo").fadeOut(0);
    $("#opc-do-altera-perfil-grupo02").addClass("animated zoomIn");
    setTimeout(function() {
      $("#opc-do-altera-perfil-grupo02").removeClass("animated zoomIn");
    }, 500);
    $("#opc-do-altera-perfil-grupo02").fadeIn(0);
    var y = e.clientY;
    var localizay = y + 0;
    var x = e.clientX;
    var localizax = x + 0;
    console.log(e);
    document.getElementById("opc-do-altera-perfil-grupo02").style.left =
      x + "px";
    document.getElementById("opc-do-altera-perfil-grupo02").style.top =
      y + "px";
  });

  $(".opc-do-altera-perfil-grupo-p01").click(function() {
    $(".perfil-grupo-campo-img-sem-hover").fadeOut(0);
    $(".perfil-grupo-campo-img-hover").fadeIn(0);
    $("#opc-do-altera-perfil-grupo").fadeOut(0);
    $("#opc-do-altera-perfil-grupo02").fadeOut(0);
    $(".visualiza-foto-grupo-perfil").fadeIn(0);
  });

  $(".opc-do-altera-perfil-grupo-p02").click(function() {
    $(".input_file_grupo").trigger("click");
    $(".perfil-grupo-campo-img-sem-hover").fadeOut(0);
    $(".perfil-grupo-campo-img-hover").fadeIn(0);
    $("#opc-do-altera-perfil-grupo").fadeOut(0);
    $("#opc-do-altera-perfil-grupo02").fadeOut(0);
  });

  $(".input_file_grupo").bind("input", function() {
    var d = $(this).val();
    if (d != "") {
      $(".confirma-altera-perfil-grupo-none").fadeIn(0);
    }
  });

  $(".input_file_grupo").change(function() {
    const file = $(this)[0].files[0];
    if (file) {
      prever_imagem_selecionada_grupo(file);
    }
  });

  $(".opc-do-altera-perfil-grupo-p03").click(function() {
    $(".perfil-grupo-campo-img-sem-hover").fadeOut(0);
    $(".perfil-grupo-campo-img-hover").fadeIn(0);
    $("#opc-do-altera-perfil-grupo").fadeOut(0);
    $("#opc-do-altera-perfil-grupo02").fadeOut(0);
    $(".confirma-remove-perfil-grupo-none").fadeIn(0);
  });

  $(".arquivos-enviados-recebidos-linha-um-grupo-text").click(function() {
    $(".arquivos-conversa-grupo").fadeIn(0);
    $(".dados-conversa-grupo").fadeOut(0);
  });

  $(".arquivos-enviados-recebidos-linha-um-grupo-icon").click(function() {
    $(".arquivos-conversa-grupo").fadeIn(0);
    $(".dados-conversa-grupo").fadeOut(0);
  });

  $(".arquivos-enviados-recebidos-linha-dois-grupo-img").click(function() {
    $(".visualiza-foto-arquivo-grupo-perfil").fadeIn(0);
    var img = $(this).attr("src");
    $(".visualiza-foto-arquivo-grupo-perfil-menu-img-grande").attr("src", img);
  });

  $(".novo-participante").click(function() {
    $(".adiciona-participante-none").fadeIn(0);
  });

  $(
    ".usuario-participando-grupo-perfil, .usuario-participando-grupo-user"
  ).click(function() {});

  // index esquerdo
  $(".index-esquerdo").click(function() {
    $("#opc-do-altera-perfil-grupo").fadeOut(0);
    $("#opc-do-altera-perfil-grupo02").fadeOut(0);
    $(".perfil-grupo-campo-model").fadeOut(0);
    $(".perfil-grupo-campo-img-hover").fadeIn(0);
    $(".perfil-grupo-campo-img-sem-hover").fadeOut(0);
  });

  // perfil
  $(".perfil").click(function() {
    $("#opc-do-altera-perfil-grupo").fadeOut(0);
    $("#opc-do-altera-perfil-grupo02").fadeOut(0);
    $(".perfil-grupo-campo-model").fadeOut(0);
    $(".perfil-grupo-campo-img-hover").fadeIn(0);
    $(".perfil-grupo-campo-img-sem-hover").fadeOut(0);
  });

  // usuarios
  $(".lado-esquerdo-todas-conversas").click(function() {
    $("#opc-do-altera-perfil-grupo").fadeOut(0);
    $("#opc-do-altera-perfil-grupo02").fadeOut(0);
    $(".perfil-grupo-campo-model").fadeOut(0);
    $(".perfil-grupo-campo-img-hover").fadeIn(0);
    $(".perfil-grupo-campo-img-sem-hover").fadeOut(0);
  });

  // novo grupo tela um
  $(".novo-grupo-um").click(function() {
    $("#opc-do-altera-perfil-grupo").fadeOut(0);
    $("#opc-do-altera-perfil-grupo02").fadeOut(0);
    $(".perfil-grupo-campo-model").fadeOut(0);
    $(".perfil-grupo-campo-img-hover").fadeIn(0);
    $(".perfil-grupo-campo-img-sem-hover").fadeOut(0);
  });

  // novo grupo tela dois
  $(".novo-grupo-dois").click(function() {
    $("#opc-do-altera-perfil-grupo").fadeOut(0);
    $("#opc-do-altera-perfil-grupo02").fadeOut(0);
    $(".perfil-grupo-campo-model").fadeOut(0);
    $(".perfil-grupo-campo-img-hover").fadeIn(0);
    $(".perfil-grupo-campo-img-sem-hover").fadeOut(0);
  });

  // novo grupo tela um copia
  $(".novo-grupo-um-copia").click(function() {
    $("#opc-do-altera-perfil-grupo").fadeOut(0);
    $("#opc-do-altera-perfil-grupo02").fadeOut(0);
    $(".perfil-grupo-campo-model").fadeOut(0);
    $(".perfil-grupo-campo-img-hover").fadeIn(0);
    $(".perfil-grupo-campo-img-sem-hover").fadeOut(0);
  });

  // novo grupo tela dois copia
  $(".novo-grupo-dois-copia").click(function() {
    $("#opc-do-altera-perfil-grupo").fadeOut(0);
    $("#opc-do-altera-perfil-grupo02").fadeOut(0);
    $(".perfil-grupo-campo-model").fadeOut(0);
    $(".perfil-grupo-campo-img-hover").fadeIn(0);
    $(".perfil-grupo-campo-img-sem-hover").fadeOut(0);
  });

  // configuracoes
  $(".configuracoes").click(function() {
    $("#opc-do-altera-perfil-grupo").fadeOut(0);
    $("#opc-do-altera-perfil-grupo02").fadeOut(0);
    $(".perfil-grupo-campo-model").fadeOut(0);
    $(".perfil-grupo-campo-img-hover").fadeIn(0);
    $(".perfil-grupo-campo-img-sem-hover").fadeOut(0);
  });

  // perfil copia
  $(".perfil-copia").click(function() {
    $("#opc-do-altera-perfil-grupo").fadeOut(0);
    $("#opc-do-altera-perfil-grupo02").fadeOut(0);
    $(".perfil-grupo-campo-model").fadeOut(0);
    $(".perfil-grupo-campo-img-hover").fadeIn(0);
    $(".perfil-grupo-campo-img-sem-hover").fadeOut(0);
  });

  // papel de parede da conversa
  $(".papel-de-parede").click(function() {
    $("#opc-do-altera-perfil-grupo").fadeOut(0);
    $("#opc-do-altera-perfil-grupo02").fadeOut(0);
    $(".perfil-grupo-campo-model").fadeOut(0);
    $(".perfil-grupo-campo-img-hover").fadeIn(0);
    $(".perfil-grupo-campo-img-sem-hover").fadeOut(0);
  });

  // ajuda
  $(".ajuda").click(function() {
    $("#opc-do-altera-perfil-grupo").fadeOut(0);
    $("#opc-do-altera-perfil-grupo02").fadeOut(0);
    $(".perfil-grupo-campo-model").fadeOut(0);
    $(".perfil-grupo-campo-img-hover").fadeIn(0);
    $(".perfil-grupo-campo-img-sem-hover").fadeOut(0);
  });

  // conversa grupo
  $(".conversa-grupo").click(function() {
    $("#opc-do-altera-perfil-grupo").fadeOut(0);
    $("#opc-do-altera-perfil-grupo02").fadeOut(0);
    $(".perfil-grupo-campo-model").fadeOut(0);
    $(".perfil-grupo-campo-img-hover").fadeIn(0);
    $(".perfil-grupo-campo-img-sem-hover").fadeOut(0);
  });
});
