<?php

function handleSession()
{
  if (!isset($_SESSION)) session_start();
  if (!isset($_SESSION['email'])) {
    $url = "http://$_SERVER[HTTP_HOST]";
    header("Location: {$url}/login");
  }
}
