<?php

require './php/repository/BeerRepository.php';
require './php/repository/UserRepository.php';

class BeerLike
{
  public $user;
  public $beer;

  public function __construct($user, $beer)
  {
    $this->user = $user;
    $this->beer = $beer;
  }
}

function buildBeerLike($beerLike)
{
  return new BeerLike($beerLike->user, $beerLike->beer);
}
