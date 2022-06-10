<?php

function isPost(): bool
{
  return $_SERVER["REQUEST_METHOD"] == "POST";
}

function isGet(): bool
{
  return $_SERVER["REQUEST_METHOD"] == "GET";
}

function sortMyArray($a, $b)
{
  return count($b) - count($a);
}

function generateSubsets()
{
  $array = ['color', 'strength', 'country', 'scent', 'taste', 'foam', 'bitterness'];
  $results = [[]];



  foreach ($array as $element) {
    foreach ($results as $combination) {
      $results[] = array_merge(array($element), $combination);
    }
  }

  usort($results, 'sortMyArray');
  return $results;
}

function generateQuery()
{
  $array = [' color = ? ', ' strength = ? ', " \"styleCountry\" = ? ", ' ? = ANY(scent) ', ' ? = ANY(taste) ', ' foam = ? ', ' bitterness = ? '];
  $results = [[]];

  foreach ($array as $element) {
    foreach ($results as $combination) {
      $results[] = array_merge(array($element), $combination);
    }
  }

  usort($results, 'sortMyArray');
  return $results;
}
