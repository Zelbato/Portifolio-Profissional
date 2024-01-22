<?php

$nome = addcslashes($_POST('nome'));
$email = addcslashes($_POST('email'));
$telefone = nl_langinfo($_POST('telefone'));
$mensagem = addcslashes($_POST('mensagem'));

$destinatario = "heitorzelbato@gmail.com";
$assunto = "Contato do Site - Portifólio Heitor":
    $corpo = "Nome: ".$nome."\n".
    "E-mail: ".$email."\n".
    "Telefone: ".$telefone;

    $cabeca = "From testeheitor@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($destinatario,$assunto,$corpo,$cabeca)){
        echo ("E-mail enviado com sucesso!");
    } else{
        echo("Erro ao enviar o e-mail");
    }


?>