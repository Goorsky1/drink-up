<?php

abstract class Repository
{
    protected $database;

    public function __construct($db)
    {
        $this->database = $db;
    }
}
