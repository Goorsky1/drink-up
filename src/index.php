<?php
require './php/Routing.php';

$path = trim($_SERVER['REQUEST_URI'], '/');
$path = parse_url($path, PHP_URL_PATH);

Router::get('getBeers', 'BeerController');
Router::get('findBeerByUserResponse', 'BeerController');
Router::get('getBeer', 'BeerController');
Router::post('login', 'UserController');
Router::post('register', 'UserController');
Router::get('logout', 'UserController');
Router::get('getUserLikes', 'UserController');

Router::run($path);
