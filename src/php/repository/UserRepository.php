<?php

require_once "./php/repository/Repository.php";
require_once "./php/models/User.php";

class UserRepository extends Repository
{

  public function __construct($db)
  {
    parent::__construct($db);
  }

  public function findOneByEmail($email)
  {
    $stmt = $this->database->prepare("
            SELECT * FROM public.user WHERE email = ?
        ");
    $stmt->execute([$email]);

    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    echo $user;
    if ($user == false) {
      return null;
    }

    return buildUser($user);
  }

  public function findAllWithLikesByEmail($email)
  {
    $stmt = $this->database->prepare('
            SELECT * FROM public.beerLike LEFT JOIN beer ON beerId = beer.id LEFT JOIN user ON userId = user.id WHERE user.email = :email
        ');
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->execute();

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user == false) {
      return null;
    }

    return buildUser($user);
  }

  public function save($email, $password, $username)
  {
    $stmt = $this->database->prepare("
              INSERT INTO public.user (email, password, username) VALUES (?, ?, ?)
          ");
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $stmt->execute([
      $email, $hashed_password, $username
    ]);

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user == false) {
      return null;
    }

    return buildUser($user);
  }
}
