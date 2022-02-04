<?php

class Beer
{
    private $styleName;
    private $styleCountry;
    private $description;
    private $strength;
    private $color;
    private $foam;
    private $scent;
    private $taste;

    public function __construct(
        string $styleName,
        string $styleCountry,
        string $description,
        int $strength,
        object $color,
        object $foam,
        object $scent,
        object $taste
    ) {
        $this->styleName = $styleName;
        $this->styleCountry = $styleCountry;
        $this->description = $description;
        $this->strength = $strength;
        $this->color = $color;
        $this->foam = $foam;
        $this->scent = $scent;
        $this->taste = $taste;
    }

    public function getStyleName(): string
    {
        return $this->styleName;
    }

    public function getStyleCountry(): string
    {
        return $this->styleCountry;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function getStrength(): int
    {
        return $this->strength;
    }

    public function getColor(): object
    {
        return $this->color;
    }

    public function getFoam(): object
    {
        return $this->foam;
    }

    public function getScent(): object
    {
        return $this->scent;
    }

    public function getTaste(): object
    {
        return $this->taste;
    }
}

function buildBeer($beer)
{
    // TODO: validation
    return new Beer(
        $beer->styleName,
        $beer->styleCountry,
        $beer->description,
        $beer->strength,
        $beer->color,
        $beer->foam,
        $beer->scent,
        $beer->taste
    );
}
