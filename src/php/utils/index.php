<?php

function isPost(): bool
{
  return $_SERVER["REQUEST_METHOD"] == "POST";
}

function isGet(): bool
{
  return $_SERVER["REQUEST_METHOD"] == "GET";
}
