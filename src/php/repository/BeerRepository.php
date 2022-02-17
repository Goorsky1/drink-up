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
    try {
      $stmt = $this->database->prepare('
            SELECT * FROM public.beer WHERE styleName = :styleName
        ');
      $stmt->bindParam(':styleName', $styleName, PDO::PARAM_STR);
      $stmt->execute();

      $beer = $stmt->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
      die("Beer not found: " . $e->getMessage());
    }

    return buildBeer($beer);
  }

  public function findOneBySurveyAnswers($data)
  {
    $properties = generateSubsets();
    $queryBuilder = generateQuery();

    for ($i = 0; $i < count($properties); $i++) {
      $query = "
      SELECT \"styleName\" FROM public.beer WHERE
      ";
      $queryArgs = [];
      for ($j = 0; $j < count($properties[$i]); $j++) {
        if ($j) {
          $query .= "and";
        }
        $query .= $queryBuilder[$i][$j];
        array_push($queryArgs, $data[$properties[$i][$j]]);
      }
      $query .= ' limit 1';
      $stmt = $this->database->prepare($query);
      $stmt->execute($queryArgs);
      $styleName = $stmt->fetch(PDO::FETCH_ASSOC);
      if (!($styleName == "")) {
        return $styleName;
      }
    }
  }
}
