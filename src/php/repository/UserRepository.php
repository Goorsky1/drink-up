<?php

require_once "./php/repository/Repository.php";
require_once "./php/models/User.php";

class UserRepository extends Repository
{
  public function findOneByEmail($email)
  {
    $stmt = $this->database->connect()->prepare('
            SELECT * FROM public.user WHERE email = :email
        ');
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->execute();

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user == false) {
      return null;
    }

    return buildUser($user);
  }

  public function findAllWithLikesByEmail($email)
  {
    $stmt = $this->database->connect()->prepare('
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
    $stmt = $this->database->connect()->prepare('
              INSERT INTO public.user VALUES (email = :email, password =: password, username = :username)
          ');
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->bindParam(':password', password_hash($password, "PASSWORD_BCRYPT"), PDO::PARAM_STR);
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $stmt->execute();

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user == false) {
      return null;
    }

    return buildUser($user);
  }
}
