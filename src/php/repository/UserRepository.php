<?php

require_once "Repository.php";
require_once "../models/User.php";

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

  public function save($email, $password)
  {
    $stmt = $this->database->connect()->prepare('
              INSERT INTO public.user VALUES (email = :email, password =: password)
          ');
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);
    $stmt->bindParam(':password', password_hash($password, "PASSWORD_BCRYPT"), PDO::PARAM_STR);
    $stmt->execute();

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user == false) {
      return null;
    }

    return buildUser($user);
  }
}
