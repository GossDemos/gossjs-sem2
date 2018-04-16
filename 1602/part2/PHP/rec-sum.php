<?php
function sum($x, $y) {
  return ($y == 0) ? $x : sum(++$x, --$y);
}

echo sum(2, 3)."\n";
