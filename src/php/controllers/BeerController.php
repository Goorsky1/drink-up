<?php

require_once './php/repository/BeerRepository.php';

class BeerController
{
  private $repository;

  public function __construct($db, $repository = 'BeerRepository')
  {
    $this->repository = new $repository($db);
  }

  function getBeers()
  {
    return $this->repository->findAll();
  }

  function getBeer($styleName)
  {
    return $this->repository->findOneByStyleName($styleName);
  }

  function findBeerByUserResponse()
  {
    $_POST = json_decode(file_get_contents('php://input'), true);
    $data = $_POST;
    return $this->repository->findOneBySurveyAnswers($data);
  }
}
