$(document).ready(function() {
  $(".novo-grupo-um-seta").click(function() {
    $(".novo-grupo-um").fadeOut(0);
    $(".lado-esquerdo-todas-conversas").fadeIn(0);
    $(".novo-grupo-um-campo-busca").val("");
    pesquisar("");
    voltar_tela_inicial();
    $(".confirma-pessoas-proxima-tela-none").fadeOut(0);
    $(".novo-grupo-um-pessoas-add").removeClass(
      "novo-grupo-um-pessoas-add-aplica"
    );
  });

  $(".novo-grupo-um-seta-opc").click(function() {
    $(".novo-grupo-um").fadeOut(0);
    $(".index-esquerdo").fadeIn(0);
    $(".novo-grupo-um-campo-busca").val("");
    pesquisar("");
    voltar_tela_inicial();
    $(".confirma-pessoas-proxima-tela-none").fadeOut(0);
    $(".novo-grupo-um-pessoas-add").removeClass(
      "novo-grupo-um-pessoas-add-aplica"
    );
  });

  function voltar_tela_inicial() {
    $(".novo-grupo-um-pessoas-que-foram-selecionadas-mac-none").fadeOut(0);
    $(".novo-grupo-um-pessoas-que-foram-selecionadas-none").fadeOut(0);
    adicionadas = [];
    $(".novo-grupo-um-pessoas-que-foram-selecionadas-mac-none").remove();
  }

  $(".novo-grupo-um-campo-busca").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    pesquisar(value);
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

  function addicionar(pessoa) {
    var existe = adicionadas.filter(function(_pessoa) {
      return _pessoa.id == pessoa.id;
    });

    let tmp_id = (Math.random() * 100000) | 0;

    if (existe.length == 0) {
      adicionadas.push(pessoa);

      $(".novo-grupo-um-pessoas-que-foram-selecionadas-flex").append(`
        <div class="novo-grupo-um-pessoas-que-foram-selecionadas-mac-none animated fadeIn">
            <div class="novo-grupo-um-pessoas-que-foram-selecionadas-mac-flex">
            <div class="selecionadas-mac-img" style="background-image: url(../../img/perfil/usuario/${pessoa.foto});"></div>
            <span class="selecionadas-mac-span">${pessoa.nome}</span>
            <div class="selecionadas-mac-campo-img-fecha _${pessoa.id}-${tmp_id}" id="${pessoa.id}">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 172 172">
                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                        <path d="M0,172v-172h172v172z" fill="none"></path>
                        <g fill="#888888">
                        <path d="M52.03,42.2475l-9.7825,9.7825l34.185,33.97l-34.185,33.97l9.7825,9.7825l34.185,-33.97l34.185,33.97l9.675,-9.7825l-34.0775,-33.97l34.0775,-33.97l-9.675,-9.7825l-34.185,33.97z"></path>
                        </g>
                    </g>
                </svg>
            </div>
            </div>
        </div>`);
    }

    $(".selecionadas-mac-campo-img-fecha._" + pessoa.id + "-" + tmp_id).click(
      function() {
        var id = $(this).attr("id");

        $(this)
          .parent()
          .parent()
          .remove();

        console.log($(this).parent());

        var _index = adicionadas.findIndex(function(_pessoa) {
          return _pessoa.id == id;
        });

        adicionadas.splice(_index, 1);

        if (adicionadas.length == 0) {
          $(".novo-grupo-um-pessoas-que-foram-selecionadas-none").fadeOut(0);
          $(".confirma-pessoas-proxima-tela-none").fadeOut(0);
          $(".novo-grupo-um-pessoas-add").removeClass(
            "novo-grupo-um-pessoas-add-aplica"
          );
        }
      }
    );
  }

  $(".novo-grupo-um-pessoas-add-jaconversa-chat").click(function() {
    var id = $(this).attr("uid");
    var nome = $(this).attr("unome");
    var foto = $(this).attr("ufoto");

    addicionar({ id, nome, foto });

    $(".novo-grupo-um-pessoas-que-foram-selecionadas-none").fadeIn(0);
    $(".novo-grupo-um-pessoas-que-foram-selecionadas-mac-none").fadeIn(0);
    $(".confirma-pessoas-proxima-tela-none").fadeIn(0);
    $(".novo-grupo-um-pessoas-add").addClass(
      "novo-grupo-um-pessoas-add-aplica"
    );
    $(".novo-grupo-um-campo-busca").val("");
    $(".novo-grupo-um-campo-busca").trigger("focus");
    pesquisar("");
  });

  $(".confirma-pessoas-proxima-tela-botao").click(function() {
    $(".novo-grupo-um").fadeOut(0);
    $(".novo-grupo-dois").fadeIn(0);
    $(".novo-grupo-um-campo-busca").val("");
    pesquisar("");
    $(".novo-grupo-dois-conteudo-campo-img").addClass(
      "novo-grupo-dois-conteudo-campo-img-aplica"
    );
    $(".novo-grupo-dois-campo-preenche-nome").trigger("focus");
  });
});
