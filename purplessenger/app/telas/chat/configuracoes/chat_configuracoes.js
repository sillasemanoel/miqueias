$(document).ready(function() {
  $(".configuracoes-seta").click(function() {
    $(".configuracoes").fadeOut(0);
    $(".index-esquerdo").fadeIn(0);
  });

  $(".configuracoes-perfil").click(function() {
    $(".configuracoes").fadeOut(0);
    $(".perfil").fadeIn(0);
    $(".lado-esquerdo-perfil-menu-seta").fadeOut(0);
    $(".lado-esquerdo-perfil-menu-seta-config").fadeIn(0);
    $(".lado-esquerdo-perfil-campo-img").fadeIn(0);
    $(".lado-esquerdo-perfil-campo-img").addClass(
      "lado-esquerdo-perfil-campo-img-aplica"
    );
    $(".lado-esquerdo-perfil-sobre-pac01").addClass("bounceInDown");
    $(".lado-esquerdo-perfil-sobre-pac02").addClass("bounceInDown");
    $(".lado-esquerdo-perfil-sobre-pac03").addClass("bounceInDown");
  });

  $(".configuracoes-papel-de-parede").click(function() {
    $(".configuracoes").fadeOut(0);
    $(".papel-de-parede").fadeIn(0);
  });

  $(".configuracoes-ajuda").click(function() {
    $(".configuracoes").fadeOut(0);
    $(".ajuda").fadeIn(0);
  });
});
