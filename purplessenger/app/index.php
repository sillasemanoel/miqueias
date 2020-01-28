<!DOCTYPE html>
<html lang="pt-br">
<head>

	<meta charset="utf-8">
    <title>Purple</title>
    
    <!-- icon -->
    <link rel="icon" type="imagem/png" href="../../img/icon/purple.png" />
    <!-- animate -->
    <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">

    <!-- css -->
    <link rel="stylesheet" href="css/style.css">

    <!-- visualiza meu perfil -->
    <link rel="stylesheet" href="telas/visualiza/meu_perfil/visualiza_meu_perfil.css">
    <!-- visualiza perfil de usuario -->
    <link rel="stylesheet" href="telas/visualiza/perfil_usuario/visualiza_perfil_usuario.css">
    <!-- visualiza perfil de grupo -->
    <link rel="stylesheet" href="telas/visualiza/perfil_grupo/visualiza_perfil_grupo.css">
    <!-- visualiza midia de usuario -->
    <link rel="stylesheet" href="telas/visualiza/midia_usuario/visualiza_midia_usuario.css">
    <!-- visualiza midia de grupo -->
    <link rel="stylesheet" href="telas/visualiza/midia_grupo/visualiza_midia_grupo.css">
   <!-- index esquerdo -->
    <link rel="stylesheet" href="telas/chat/index_esquerdo/chat_index_esquerdo.css">
    <!-- perfil -->
    <link rel="stylesheet" href="telas/chat/perfil/chat_perfil.css">
    <!-- usuarios -->
    <link rel="stylesheet" href="telas/chat/usuarios/chat_usuarios.css">
    <!-- novo grupo tela um -->
    <link rel="stylesheet" href="telas/chat/novo_grupo_tela_um/chat_novo_grupo_tela_um.css">
    <!-- novo grupo tela dois -->
    <link rel="stylesheet" href="telas/chat/novo_grupo_tela_dois/chat_novo_grupo_tela_dois.css">
    <!-- configuracoes -->
    <link rel="stylesheet" href="telas/chat/configuracoes/chat_configuracoes.css">
    <!-- papel de parede -->
    <link rel="stylesheet" href="telas/chat/papel_de_parede/chat_papel_de_parede.css">
    <!-- ajuda -->
    <link rel="stylesheet" href="telas/chat/ajuda/chat_ajuda.css">
    <!-- index direito -->
    <link rel="stylesheet" href="telas/chat/index_direito/chat_index_direito.css">
    <!-- emoji de conversa usuario -->
    <link rel="stylesheet" href="telas/chat/emoji_conversa_usuario/chat_emoji_conversa_usuario.css">
    <!-- conversa usuario -->
    <link rel="stylesheet" href="telas/chat/conversa_usuario/chat_conversa_usuario.css">
    <!-- conversa grupo -->
    <link rel="stylesheet" href="telas/chat/conversa_grupo/chat_conversa_grupo.css">
    <!-- dados de conversa usuario -->
    <link rel="stylesheet" href="telas/chat/dados_conversa_usuario/chat_dados_conversa_usuario.css">
    <!-- dados de conversa grupo -->
    <link rel="stylesheet" href="telas/chat/dados_conversa_grupo/chat_dados_conversa_grupo.css">  
    <!-- arquivos de conversa usuario -->
    <link rel="stylesheet" href="telas/chat/arquivos_usuario/chat_arquivos_usuario.css">  
    <!-- arquivos de conversa grupo -->
    <link rel="stylesheet" href="telas/chat/arquivos_grupo/chat_arquivos_grupo.css">
    <!-- confirma altera perfil -->
    <link rel="stylesheet" href="telas/confirma/altera_perfil/confirma_altera_perfil.css">
    <!-- confirma altera perfil grupo -->
    <link rel="stylesheet" href="telas/confirma/altera_perfil_grupo/confirma_altera_perfil_grupo.css">
    <!-- confirma remove perfil -->
    <link rel="stylesheet" href="telas/confirma/remove_perfil/confirma_remove_perfil.css">
    <!-- confirma remove perfil grupo -->
    <link rel="stylesheet" href="telas/confirma/remove_perfil_grupo/confirma_remove_perfil_grupo.css">
    <!-- confirma adiciona participante -->
    <link rel="stylesheet" href="telas/confirma/adiciona_participante/confirma_adiciona_participante.css">

</head>    
<body>

    <?php
        // visualiza meu 
        include "telas/visualiza/meu_perfil/visualiza_meu_perfil.html";
        // visualiza perfil de usuario
        include "telas/visualiza/perfil_usuario/visualiza_perfil_usuario.html";
        // visualiza perfil de grupo
        include "telas/visualiza/perfil_grupo/visualiza_perfil_grupo.html";
        // visualiza midia de usuario
        include "telas/visualiza/midia_usuario/visualiza_midia_usuario.html";
        // visualiza midia de grupo
        include "telas/visualiza/midia_grupo/visualiza_midia_grupo.html";
    ?>

    <div class="targa-topo"></div>

    <!-- chat -->
    <div class="chat">
        <?php
            // index esquerdo
            include "telas/chat/index_esquerdo/chat_index_esquerdo.html";
            // perfil
            include "telas/chat/perfil/chat_perfil.html";
            // usuarios
            include "telas/chat/usuarios/chat_usuarios.html";
            // novo grupo tela um
            include "telas/chat/novo_grupo_tela_um/chat_novo_grupo_tela_um.html";
            // novo grupo tela 
            include "telas/chat/novo_grupo_tela_dois/chat_novo_grupo_tela_dois.html";
            // configuracoes
            include "telas/chat/configuracoes/chat_configuracoes.html";
            // papel de parede
            include "telas/chat/papel_de_parede/chat_papel_de_parede.html";
            // ajuda
            include "telas/chat/ajuda/chat_ajuda.html";
            // index direito
            include "telas/chat/index_direito/chat_index_direito.html";
            // emoji de conversa usuario
            include "telas/chat/emoji_conversa_usuario/chat_emoji_conversa_usuario.html";
            // conversa usuario
            include "telas/chat/conversa_usuario/chat_conversa_usuario.html";
            // conversa grupo
            include "telas/chat/conversa_grupo/chat_conversa_grupo.html";
            // dados de conversa usuario
            include "telas/chat/dados_conversa_usuario/chat_dados_conversa_usuario.html";
            // dados de conversa grupo
            include "telas/chat/dados_conversa_grupo/chat_dados_conversa_grupo.html";  
            // arquivos de conversa usuario
            include "telas/chat/arquivos_usuario/chat_arquivos_usuario.html";  
            // arquivos de conversa grupo
            include "telas/chat/arquivos_grupo/chat_arquivos_grupo.html";
        ?>
    </div>
    
    <?php
        // confirma altera perfil
        include "telas/confirma/altera_perfil/confirma_altera_perfil.html";
        // confirma altera perfil 
        include "telas/confirma/altera_perfil_grupo/confirma_altera_perfil_grupo.html";
        // confirma remove perfil
        include "telas/confirma/remove_perfil/confirma_remove_perfil.html";
        // confirma remove perfil 
        include "telas/confirma/remove_perfil_grupo/confirma_remove_perfil_grupo.html";
        // confirma adiciona participante
        include "telas/confirma/adiciona_participante/confirma_adiciona_participante.html";
    ?>
    
    <!-- fastclick -->
    <script src="https://cdn.jsdelivr.net/npm/fastclick@1.0.6/lib/fastclick.min.js"></script>
    <!-- jquery -->
    <script src="../../js/jquery/jquery.js"></script>
    <script src="../../js/jquery/jquery.nice-select.min.js"></script>
    
    <!-- js -->
    <script src="js/js.js"></script> 

    <!-- visualiza meu perfil -->
    <script src="telas/visualiza/meu_perfil/visualiza_meu_perfil.js"></script>
    <!-- visualiza perfil de usuario -->
    <script src="telas/visualiza/perfil_usuario/visualiza_perfil_usuario.js"></script>
    <!-- visualiza perfil de grupo -->
    <script src="telas/visualiza/perfil_grupo/visualiza_perfil_grupo.js"></script>
    <!-- visualiza midia de usuario -->
    <script src="telas/visualiza/midia_usuario/visualiza_midia_usuario.js"></script>
    <!-- visualiza midia de grupo -->
    <script src="telas/visualiza/midia_grupo/visualiza_midia_grupo.js"></script>
    <!-- index esquerdo -->
    <script src="telas/chat/index_esquerdo/chat_index_esquerdo.js"></script>
    <!-- perfil -->
    <script src="telas/chat/perfil/chat_perfil.js"></script>
    <!-- usuarios -->
    <script src="telas/chat/usuarios/chat_usuarios.js"></script>
    <!-- novo grupo tela um -->
    <script src="telas/chat/novo_grupo_tela_um/chat_novo_grupo_tela_um.js"></script>
    <!-- novo grupo tela dois -->
    <script src="telas/chat/novo_grupo_tela_dois/chat_novo_grupo_tela_dois.js"></script>
    <!-- configuracoes -->
    <script src="telas/chat/configuracoes/chat_configuracoes.js"></script>
    <!-- papel de parede -->
    <script src="telas/chat/papel_de_parede/chat_papel_de_parede.js"></script>
    <!-- ajuda -->
    <script src="telas/chat/ajuda/chat_ajuda.js"></script>
    <!-- emoji de conversa usuario -->
    <script src="telas/chat/emoji_conversa_usuario/chat_emoji_conversa_usuario.js"></script>
    <!-- conversa usuario -->
    <script src="telas/chat/conversa_usuario/chat_conversa_usuario.js"></script>
    <!-- conversa grupo -->
    <script src="telas/chat/conversa_grupo/chat_conversa_grupo.js"></script>
    <!-- dados de conversa usuario -->
    <script src="telas/chat/dados_conversa_usuario/chat_dados_conversa_usuario.js"></script>
    <!-- dados de conversa grupo -->
    <script src="telas/chat/dados_conversa_grupo/chat_dados_conversa_grupo.js"></script>  
    <!-- arquivos de conversa usuario -->
    <script src="telas/chat/arquivos_usuario/chat_arquivos_usuario.js"></script>  
    <!-- arquivos de conversa grupo -->
    <script src="telas/chat/arquivos_grupo/chat_arquivos_grupo.js"></script>
    <!-- confirma altera perfil -->
    <script src="telas/confirma/altera_perfil/confirma_altera_perfil.js"></script>
    <!-- confirma altera perfil grupo -->
    <script src="telas/confirma/altera_perfil_grupo/confirma_altera_perfil_grupo.js"></script>
    <!-- confirma remove perfil -->
    <script src="telas/confirma/remove_perfil/confirma_remove_perfil.js"></script>
    <!-- confirma remove perfil grupo -->
    <script src="telas/confirma/remove_perfil_grupo/confirma_remove_perfil_grupo.js"></script>
    <!-- confirma adiciona participante -->
    <script src="telas/confirma/adiciona_participante/confirma_adiciona_participante.js"></script>

</body>
</html>