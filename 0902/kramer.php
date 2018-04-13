<?php
$a1 = 1;
$b1 = 3;
$c1 = 2;
$a2 = 9;
$b2 = 2;
$c2 = 7;

$d1 = $a1 * $b2 - $b1 * $a2;
$d2 = $c1 * $b2 - $b1 * $c2;
$d3 = $a1 * $c2 - $c1 * $a2;
$x1 = $d2 / $d1;
$x2 = $d3 / $d1;

echo 'x1: '.$x1. PHP_EOL;
echo 'x2: '.$x2. PHP_EOL;
?>
