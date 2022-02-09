<?php

require_once './php/repository/BeerRepository.php';

class BeerController
{
  private $beerRepository;

  public function __construct($beerRepository, $db)
  {
    $this->beerRepository = new $beerRepository($db);
  }

  function getBeers()
  {
    return $this->beerRepository->findAll();
  }

  function getBeer($styleName)
  {
    return $this->beerRepository->findOneByStyleName($styleName);
  }

  function findBeerByUserResponse()
  {
  }
}
