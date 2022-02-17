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
    $data = $_POST;
    return $this->repository->findOneBySurveyAnswers($data);
  }
}
