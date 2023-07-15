<?php
  if (isset($_POST['name']))
    $name = $_POST['name'];
  if (isset($_POST['email']))
    $email = $_POST['email'];
  if (isset($_POST['message']))
    $message = $_POST['message'];
  if (isset($_POST['subject']))
    $subject = $_POST['subject'];
  if ($name === '') {
    echo "Nome não pode ficar vazio.";
    die();
  }
  if ($email === '') {
    echo "Este campo não pode ficar vazio.";
    die();
  } else {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      echo "Formato de email inválido.";
      die();
    }
  }
  if ($subject === '') {
    echo "Este campo não pode ficar vazio.";
    die();
  }
  if ($message === '') {
    echo "Este campo não pode ficar vazio.";
    die();
  }
  $content = "From: $name \nEmail: $email \nMessage: $message";
  $recipient = "contato@visualwebdigital.com.br";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $content, $mailheader) or die("Error!");
  echo "Email enviado";
?>