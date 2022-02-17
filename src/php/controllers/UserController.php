<?php

require './php/repository/UserRepository.php';
require './php/utils/index.php';

class UserController
{
  private $repository;

  public function __construct($db, $repository = 'UserRepository')
  {
    $this->repository = new $repository($db);
  }

  function getUser($email)
  {
    return $this->repository->findOneByEmail($email);
  }

  function saveUser($email, $password)
  {
    return $this->repository->save($email, $password);
  }

  public function getUserLikes($email): object
  {
    $beerLikes = $this->repository->findAllWithLikesByEmail($email);

    return $beerLikes;
  }

  public function login()
  {
    if (!isPost()) {
      http_response_code(405);
      return "Method not allowed";
    }

    if (!isset($_POST['email']) || !isset($_POST['password'])) {
      http_response_code(400);
      return "Invalid request";
    }

    $email = $_POST['email'];
    $password = $_POST['password'];


    if (empty($email) || empty($password)) {
      http_response_code(400);
      return "Invalid request";
    }

    $user = $this->repository->findOneByEmail($_POST['email']);

    if (!$user || $user->getPassword() !== password_hash($password, PASSWORD_DEFAULT)) {
      http_response_code(400);
      return "Invalid email or password";
    }

    $hash = openssl_encrypt(
      $user->id,
      'aes-256-ctr',
      getenv('secret'),
    );

    return "{\"hash\":\"$hash\"}";
  }

  public function register()
  {
    if (!isPost()) {
      return http_response_code(405);
    }
    $data = $_POST;

    $email = $data['email'];
    $password = $data['password'];
    $username = $data['username'];

    if (!isset($_POST['email']) || !isset($_POST['password']) || !isset($_POST['username'])) {
      http_response_code(400);
      return "Invalid request";
    }

    $user = $this->repository->findOneByEmail($email);

    if ($user) {
      return http_response_code(409);
    }

    $this->repository->save($email, $password, $username);
    return http_response_code(201);
  }

  public function logout()
  {
    if (!isset($_SESSION)) {
      session_start();
    }

    if (isset($_SESSION)) {
      session_destroy();
    }

    http_response_code(204);
  }
}
