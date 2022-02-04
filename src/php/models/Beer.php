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

    public function __construct($styleName, $styleCountry, $description, $strength, $color, $foam, $scent, $taste)
    {
        $this->styleName = $styleName;
        $this->styleCountry = $styleCountry;
        $this->description = $description;
        $this->strength = $strength;
        $this->color = $color;
        $this->foam = $foam;
        $this->scent = $scent;
        $this->taste = $taste;
    }

    public function getStyleName()
    {
        return $this->styleName;
    }

    public function getStyleCountry()
    {
        return $this->styleCountry;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function getStrength()
    {
        return $this->strength;
    }

    public function getColor()
    {
        return $this->color;
    }

    public function getFoam()
    {
        return $this->foam;
    }

    public function getScent()
    {
        return $this->scent;
    }

    public function getTaste()
    {
        return $this->taste;
    }
}