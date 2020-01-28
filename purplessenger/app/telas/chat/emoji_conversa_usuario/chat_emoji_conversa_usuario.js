$(document).ready(function() {
  $(".responsive_emoji").click(function() {
    var emoji = $(this).text();
    $(".rodape-envia-msg-conversa-usuario-campo").val(
      $(".rodape-envia-msg-conversa-usuario-campo").val() + emoji
    );
    $(".rodape-envia-msg-conversa-usuario-campo").trigger("focus");
  });
});
