<?php

require_once "./php/repository/Repository.php";
require_once "./php/models/Beer.php";

class BeerRepository extends Repository
{

  public function __construct($db)
  {
    parent::__construct($db);
  }

  public function findAll()
  {
    $stmt = $this->database->prepare('
            SELECT * FROM public.beer
        ');
    $stmt->execute();

    $beer = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($beer == false) {
      return null;
    }

    return buildBeer($beer);
  }

  public function findOneByStyleName($styleName)
  {
    $stmt = $this->database->prepare('
            SELECT * FROM public.beer WHERE style_name = :style_name
        ');
    $stmt->bindParam(':style_name', $styleName, PDO::PARAM_STR);
    $stmt->execute();

    $beer = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($beer == false) {
      return null;
    }

    return buildBeer($beer);
  }
}
