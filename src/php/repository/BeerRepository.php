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
            SELECT * FROM public.beer WHERE styleName = :styleName
        ');
    $stmt->bindParam(':styleName', $styleName, PDO::PARAM_STR);
    $stmt->execute();

    $beer = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($beer == false) {
      return null;
    }

    return buildBeer($beer);
  }

  public function findOneBySurveyAnswers($data)
  {
    $color = $data['color'];
    $strength = $data['strength'];
    $country = $data['country'];
    $scent = $data['scent'];
    $taste = $data['taste'];
    $foam = $data['foam'];
    $bitterness = $data['bitterness'];

    $properties = generateSubsets();
    $queryBuilder = generateQuery();

    // foreach ($properties as $subset)
    for ($i = 0; $i < count($properties); $i++) {
      $query = "
      SELECT \"styleName\" FROM public.beer WHERE
      ";
      $queryArgs = [];
      // foreach ($subset as $index)
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
        foreach ($styleName as $i) {
          echo $i;
          echo " ";
        }
        return $styleName;
      }
    }

    // $stmt = $this->database->prepare("
    //         SELECT \"styleName\" FROM public.beer WHERE color = ? AND strength = ?
    //         AND \"styleCountry\" = ? AND ? = ANY(scent) AND ? = ANY(taste)
    //         AND foam = ? AND bitterness = ?
    // ");
    // $stmt->execute([$color, $strength, $country, $scent, $taste, $foam, $bitterness]);

    // $styleName = $stmt->fetch(PDO::FETCH_ASSOC);

    // if (!($styleName == "")) {
    //   foreach ($styleName as $i) {
    //     echo $i;
    //     echo " ";
    //   }
    //   return $styleName;
    // }

    // $stmt = $this->database->prepare("
    //         SELECT \"styleName\" FROM public.beer WHERE color = ? AND strength = ? AND \"styleCountry\" = ?
    //         AND ? = ANY(scent) AND ? = ANY(taste) AND bitterness = ?
    // ");
    // $stmt->execute([$color, $strength, $country, $scent, $taste, $bitterness]);
    // $styleName = $stmt->fetch(PDO::FETCH_ASSOC);

    // if (!($styleName == "")) {
    //   foreach ($styleName as $i) {
    //     echo $i;
    //     echo " ";
    //   }
    //   return $styleName;
    // }

    // $stmt = $this->database->prepare("
    //         SELECT \"styleName\" FROM public.beer WHERE color = ? AND strength = ? AND \"styleCountry\" = ?
    //         AND ? = ANY(scent) AND ? = ANY(taste) AND foam = ?
    // ");
    // $stmt->execute([$color, $strength, $country, $scent, $taste, $foam]);
    // $styleName = $stmt->fetch(PDO::FETCH_ASSOC);

    // if (!($styleName == "")) {
    //   foreach ($styleName as $i) {
    //     echo $i;
    //     echo " ";
    //   }
    //   return $styleName;
    // }

    // $stmt = $this->database->prepare("
    //         SELECT \"styleName\" FROM public.beer WHERE strength = ? AND \"styleCountry\" = ?
    //         AND ? = ANY(scent) AND ? = ANY(taste) AND foam = ? AND bitterness = ?
    // ");
    // $stmt->execute([$strength, $country, $scent, $taste, $foam, $bitterness]);
    // $styleName = $stmt->fetch(PDO::FETCH_ASSOC);

    // if (!($styleName == "")) {
    //   foreach ($styleName as $i) {
    //     echo $i;
    //     echo " ";
    //   }
    //   return $styleName;
    // }

    // $stmt = $this->database->prepare("
    //         SELECT \"styleName\" FROM public.beer WHERE color = ? AND strength = ?
    //         AND ? = ANY(scent) AND ? = ANY(taste) AND foam = ? AND bitterness = ?
    // ");
    // $stmt->execute([$color, $strength, $scent, $taste, $foam, $bitterness]);
    // $styleName = $stmt->fetch(PDO::FETCH_ASSOC);

    // if (!($styleName == "")) {
    //   foreach ($styleName as $i) {
    //     echo $i;
    //     echo " ";
    //   }
    //   return $styleName;
    // }

    // $stmt = $this->database->prepare("
    //         SELECT \"styleName\" FROM public.beer WHERE color = ? AND strength = ? AND \"styleCountry\" = ?
    //         AND ? = ANY(scent) AND ? = ANY(taste) AND foam = ? AND bitterness = ?
    // ");
    // $stmt->execute([$color, $strength, $country, $scent, $taste, $foam, $bitterness]);
    // $styleName = $stmt->fetch(PDO::FETCH_ASSOC);

    // if (!($styleName == "")) {
    //   foreach ($styleName as $i) {
    //     echo $i;
    //     echo " ";
    //   }
    //   return $styleName;
    // }
  }
}
