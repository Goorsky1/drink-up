<?php

require_once "Repository.php";
require_once "../models/Beer.php";

class BeerRepository extends Repository
{
  public function findAll()
  {
    $stmt = $this->database->connect()->prepare('
            SELECT * FROM public.beer
        ');
    $stmt->execute();

    $beer = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($beer == false) {
      return null;
    }

    return buildBeer($beer);
  }
}
