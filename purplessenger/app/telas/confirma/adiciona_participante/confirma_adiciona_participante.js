$(document).ready(function() {
  $(".fundo-confirma-adiciona-participante").click(function() {
    $(".adiciona-participante-none").fadeOut(0);
    $(".busca-campo-adiciona-participante").val("");
    pesquisar("");
    voltar_tela_inicial();
  });

  $(".caixa-confirma-adiciona-participante-menu-cancela").click(function() {
    $(".adiciona-participante-none").fadeOut(0);
    $(".busca-campo-adiciona-participante").val("");
    pesquisar("");
    voltar_tela_inicial();
  });

  $(".busca-campo-adiciona-participante").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    pesquisar(value);
  });

  function pesquisar(value) {
    $(".pessoas-adiciona-participante .no-busca-part").filter(function() {
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
    $(".adiciona-participante-pessoas-que-foram-selecionadas-mac-none").fadeOut(
      0
    );
    $(".adiciona-participante-pessoas-que-foram-selecionadas-none").fadeOut(0);
    $(
      ".adiciona-participante-pessoas-que-foram-selecionadas-mac-none"
    ).remove();
  }

  function addicionar(pessoa) {
    var existe = adicionadas.filter(function(_pessoa) {
      return _pessoa.id == pessoa.id;
    });

    let tmp_id = (Math.random() * 100000) | 0;

    if (existe.length == 0) {
      adicionadas.push(pessoa);

      $(".adiciona-participante-pessoas-que-foram-selecionadas-flex").append(`
        <div class="adiciona-participante-pessoas-que-foram-selecionadas-mac-none animated fadeIn">
            <div class="adiciona-participante-pessoas-que-foram-selecionadas-mac-flex">
            <div class="adiciona-participante-selecionadas-mac-img" style="background-image: url(../../img/perfil/usuario/${pessoa.foto});"></div>
            <span class="adiciona-participante-selecionadas-mac-span">${pessoa.nome}</span>
            <div class="adiciona-participante-selecionadas-mac-campo-img-fecha _${pessoa.id}-${tmp_id}" id="${pessoa.id}">
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

    $(
      ".adiciona-participante-selecionadas-mac-campo-img-fecha._" +
        pessoa.id +
        "-" +
        tmp_id
    ).click(function() {
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
        $(".adiciona-participante-pessoas-que-foram-selecionadas-none").fadeOut(
          0
        );
        $(".adiciona-participante-confirma-pessoas-proxima-tela-none").fadeOut(
          0
        );
        $(
          ".adiciona-participante-adiciona-participantepessoas-add"
        ).removeClass("adiciona-participante-pessoas-add-aplica");
      }
    });
  }

  $(".pessoas-adiciona-participante-jaconversa-chat").click(function() {
    var id = $(this).attr("uid");
    var nome = $(this).attr("unome");
    var foto = $(this).attr("ufoto");

    addicionar({ id, nome, foto });

    $(".adiciona-participante-pessoas-que-foram-selecionadas-none").fadeIn(0);
    $(".adiciona-participante-pessoas-que-foram-selecionadas-mac-none").fadeIn(
      0
    );
    $(".adiciona-participante-confirma-pessoas-proxima-tela-none").fadeIn(0);
    $(".adiciona-participante-pessoas-add").addClass(
      "adiciona-participante-pessoas-add-aplica"
    );
    $(".busca-campo-adiciona-participante").val("");
    $(".busca-campo-adiciona-participante").trigger("focus");
    pesquisar("");
  });

  $(".botao-confirma-adiciona-part").click(function() {
    $(".adiciona-participante-none").fadeOut(0);
    $(".busca-campo-adiciona-participante").val("");
    pesquisar("");
    voltar_tela_inicial();
  });
});
