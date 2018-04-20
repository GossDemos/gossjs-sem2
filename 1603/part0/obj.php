<?php
$ig = new class {
  function __construct($first = 'Elias', $second = 'Goss') {
    $this->first = $first;
    $this->second = $second;
  }
  function getFullName() {
    return "Mr. ".$this->first." ".$this->second."\n";
  }
};

echo ($ig -> getFullName());
?>
