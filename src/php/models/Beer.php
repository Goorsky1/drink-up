<?php

class Beer
{
    private $id;
    private $styleName;
    private $styleCountry;
    private $strength;
    private $color;
    private $foam;
    private $scent;
    private $taste;
    private $beerLikeId;

    public function __construct(
        string $styleName,
        string $styleCountry,
        int $strength,
        string $color,
        string $foam,
        string $scent,
        string $taste
    ) {
        $this->styleName = $styleName;
        $this->styleCountry = $styleCountry;
        $this->strength = $strength;
        $this->color = $color;
        $this->foam = $foam;
        $this->scent = $scent;
        $this->taste = $taste;
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getStyleName(): string
    {
        return $this->styleName;
    }

    public function getStyleCountry(): string
    {
        return $this->styleCountry;
    }

    public function getStrength(): int
    {
        return $this->strength;
    }

    public function getColor(): string
    {
        return $this->color;
    }

    public function getFoam(): string
    {
        return $this->foam;
    }

    public function getScent(): string
    {
        return $this->scent;
    }

    public function getTaste(): string
    {
        return $this->taste;
    }

    public function getBeerLikeId(): string
    {
        return $this->beerLikeId;
    }

    public function setBeerLikeId(string $beerLikeId)
    {
        $this->beerLikeId = $beerLikeId;
    }
}

function buildBeer($beer)
{
    // TODO: validation
    return new Beer(
        $beer['styleName'],
        $beer['styleCountry'],
        $beer['strength'],
        $beer['color'],
        $beer['foam'],
        $beer['scent'],
        $beer['taste']
    );
}
