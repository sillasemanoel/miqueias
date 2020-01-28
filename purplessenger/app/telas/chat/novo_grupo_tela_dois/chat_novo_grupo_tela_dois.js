$(document).ready(function() {
  $(".novo-grupo-dois-campo-model").click(function() {
    $("#altera-perfil-novo-grupo").fadeOut(0);
    $("#altera-perfil-novo-grupo02").fadeOut(0);
    $(".novo-grupo-dois-campo-model").fadeOut(0);
    $(".novo-grupo-dois-conteudo-campo-img-hover").fadeIn(0);
    $(".novo-grupo-dois-conteudo-campo-img-sem-hover").fadeOut(0);
  });

  $(".novo-grupo-dois-menu").click(function() {
    $("#altera-perfil-novo-grupo").fadeOut(0);
    $("#altera-perfil-novo-grupo02").fadeOut(0);
    $(".novo-grupo-dois-campo-model").fadeOut(0);
    $(".novo-grupo-dois-conteudo-campo-img-hover").fadeIn(0);
    $(".novo-grupo-dois-conteudo-campo-img-sem-hover").fadeOut(0);
  });

  $(".novo-grupo-dois-seta").click(function() {
    $(".novo-grupo-dois").fadeOut(0);
    $(".novo-grupo-um").fadeIn(0);
    $(".novo-grupo-dois-conteudo-campo-img").removeClass(
      "novo-grupo-dois-conteudo-campo-img-aplica"
    );
    $(".novo-grupo-dois-campo-preenche-nome").val("");
    $(".confirma-pessoas-none").fadeOut(0);
    $(".novo-grupo-dois-conteudo-responsivo").removeClass(
      "novo-grupo-dois-conteudo-responsivo-aplica"
    );
    $(".novo-grupo-dois-conteudo-campo-img").css(
      "background-image",
      "url(img/perfil/grupo/none/none.png)"
    );
  });

  $(".novo-grupo-dois-conteudo-campo-img-hover").hover(function() {
    $(".novo-grupo-dois-conteudo-campo-img-hover-img").fadeToggle(0);
    $(".novo-grupo-dois-conteudo-campo-img-hover-text").fadeToggle(0);
  });

  $(".novo-grupo-dois-conteudo-campo-img-hover").on("click", function(e) {
    $(".novo-grupo-dois-conteudo-campo-img-hover").fadeOut(0);
    $(".novo-grupo-dois-conteudo-campo-img-sem-hover").fadeIn(0);
    $(".novo-grupo-dois-conteudo-campo-model").fadeIn(0);
    $(".novo-grupo-dois-campo-model").fadeIn(0);
    $("#altera-perfil-novo-grupo02").fadeOut(0);
    $("#altera-perfil-novo-grupo").fadeIn(0);
    var y = e.clientY;
    var localizay = y + 0;
    var x = e.clientX;
    var localizax = x + 0;
    console.log(e);
    document.getElementById("altera-perfil-novo-grupo").style.left = x + "px";
    document.getElementById("altera-perfil-novo-grupo").style.top = y + "px";
  });

  $(".novo-grupo-dois-conteudo-campo-img-sem-hover").on("click", function(e) {
    $("#altera-perfil-novo-grupo").fadeOut(0);
    $("#altera-perfil-novo-grupo02").addClass("animated zoomIn");
    setTimeout(function() {
      $("#altera-perfil-novo-grupo02").removeClass("animated zoomIn");
    }, 500);
    $("#altera-perfil-novo-grupo02").fadeIn(0);
    var y = e.clientY;
    var localizay = y + 0;
    var x = e.clientX;
    var localizax = x + 0;
    console.log(e);
    document.getElementById("altera-perfil-novo-grupo02").style.left = x + "px";
    document.getElementById("altera-perfil-novo-grupo02").style.top = y + "px";
  });

  var $input_file = $(".input_file_altera_foto_novo_grupo");
  var $btn_altera_perfil_novo_grupo02_carregar = $(
    ".altera-perfil-novo-grupo02-carregar"
  );

  $btn_altera_perfil_novo_grupo02_carregar.click(function() {
    $input_file.trigger("click");
    $(".novo-grupo-dois-conteudo-campo-img-hover").fadeIn(0);
    $(".novo-grupo-dois-conteudo-campo-img-sem-hover").fadeOut(0);
    $(".novo-grupo-dois-campo-model").fadeOut(0);
    $("#altera-perfil-novo-grupo").fadeOut(0);
    $("#altera-perfil-novo-grupo02").fadeOut(0);
  });

  $(".input_file_altera_foto_novo_grupo").change(function() {
    const file = $(this)[0].files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function() {
      $(".novo-grupo-dois-conteudo-campo-img").css(
        "background-image",
        "url(" + fileReader.result + ")"
      );
    };
    fileReader.readAsDataURL(file);
  });

  $(".novo-grupo-dois-campo-preenche-nome").bind("input", function() {
    var d = $(this).val();
    if (d != "") {
      $(".confirma-pessoas-none").fadeIn(0);
      $(".novo-grupo-dois-conteudo-responsivo").addClass(
        "novo-grupo-dois-conteudo-responsivo-aplica"
      );
    } else {
      $(".confirma-pessoas-none").fadeOut(0);
      $(".novo-grupo-dois-conteudo-responsivo").removeClass(
        "novo-grupo-dois-conteudo-responsivo-aplica"
      );
    }
  });

  $(".confirma-pessoas-botao").click(function() {
    $(".novo-grupo-um-campo-busca").val("");
    pesquisar("");
    voltar_tela_inicial();
    $(".confirma-pessoas-proxima-tela-none").fadeOut(0);
    $(".novo-grupo-um-pessoas-add").removeClass(
      "novo-grupo-um-pessoas-add-aplica"
    );
    $(".novo-grupo-dois-campo-preenche-nome").val("");
    $(".confirma-pessoas-none").fadeOut(0);
    $(".novo-grupo-dois-conteudo-responsivo").removeClass(
      "novo-grupo-dois-conteudo-responsivo-aplica"
    );
    $(".novo-grupo-dois-conteudo-campo-img").css(
      "background-image",
      "url(img/perfil/grupo/none/none.png)"
    );
    $(".novo-grupo-dois").fadeOut(0);
    $(".index-esquerdo").fadeIn(0);
    $(".index-direito").fadeOut(0);
    $(".conversa-usuario").fadeOut(0);
    $(".conversa-grupo").fadeIn(0);
  });

  function pesquisar(value) {
    $(".novo-grupo-um-pessoas-add .no-busca").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  }

  function voltar_tela_inicial() {
    adicionadas = [];
    $(".novo-grupo-um-pessoas-que-foram-selecionadas-mac-none").fadeOut(0);
    $(".novo-grupo-um-pessoas-que-foram-selecionadas-none").fadeOut(0);
    $(".novo-grupo-um-pessoas-que-foram-selecionadas-mac-none").remove();
  }

  // index direito
  $(".index-direito").click(function() {
    $("#altera-perfil-novo-grupo").fadeOut(0);
    $("#altera-perfil-novo-grupo02").fadeOut(0);
    $(".novo-grupo-dois-campo-model").fadeOut(0);
    $(".novo-grupo-dois-conteudo-campo-img-hover").fadeIn(0);
    $(".novo-grupo-dois-conteudo-campo-img-sem-hover").fadeOut(0);
  });

  // conversa usuario
  $(".conversa-usuario").click(function() {
    $("#altera-perfil-novo-grupo").fadeOut(0);
    $("#altera-perfil-novo-grupo02").fadeOut(0);
    $(".novo-grupo-dois-campo-model").fadeOut(0);
    $(".novo-grupo-dois-conteudo-campo-img-hover").fadeIn(0);
    $(".novo-grupo-dois-conteudo-campo-img-sem-hover").fadeOut(0);
  });

  // dados de conversa usuario
  $(".dados-conversa-usuario").click(function() {
    $("#altera-perfil-novo-grupo").fadeOut(0);
    $("#altera-perfil-novo-grupo02").fadeOut(0);
    $(".novo-grupo-dois-campo-model").fadeOut(0);
    $(".novo-grupo-dois-conteudo-campo-img-hover").fadeIn(0);
    $(".novo-grupo-dois-conteudo-campo-img-sem-hover").fadeOut(0);
  });

  // arquivos de conversa usuario
  $(".arquivos-conversa-usuario").click(function() {
    $("#altera-perfil-novo-grupo").fadeOut(0);
    $("#altera-perfil-novo-grupo02").fadeOut(0);
    $(".novo-grupo-dois-campo-model").fadeOut(0);
    $(".novo-grupo-dois-conteudo-campo-img-hover").fadeIn(0);
    $(".novo-grupo-dois-conteudo-campo-img-sem-hover").fadeOut(0);
  });

  // conversa grupo
  $(".conversa-grupo").click(function() {
    $("#altera-perfil-novo-grupo").fadeOut(0);
    $("#altera-perfil-novo-grupo02").fadeOut(0);
    $(".novo-grupo-dois-campo-model").fadeOut(0);
    $(".novo-grupo-dois-conteudo-campo-img-hover").fadeIn(0);
    $(".novo-grupo-dois-conteudo-campo-img-sem-hover").fadeOut(0);
  });

  // dados de conversa grupo
  $(".dados-conversa-grupo").click(function() {
    $("#altera-perfil-novo-grupo").fadeOut(0);
    $("#altera-perfil-novo-grupo02").fadeOut(0);
    $(".novo-grupo-dois-campo-model").fadeOut(0);
    $(".novo-grupo-dois-conteudo-campo-img-hover").fadeIn(0);
    $(".novo-grupo-dois-conteudo-campo-img-sem-hover").fadeOut(0);
  });

  // arquivos de conversa grupo
  $(".arquivos-conversa-grupo").click(function() {
    $("#altera-perfil-novo-grupo").fadeOut(0);
    $("#altera-perfil-novo-grupo02").fadeOut(0);
    $(".novo-grupo-dois-campo-model").fadeOut(0);
    $(".novo-grupo-dois-conteudo-campo-img-hover").fadeIn(0);
    $(".novo-grupo-dois-conteudo-campo-img-sem-hover").fadeOut(0);
  });
});
