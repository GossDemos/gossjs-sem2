<?php declare(strict_types=1);
function randomRGB() {
  return rand(0, 255);
}

function makeColor($r, $g, $b) { //passing a function as default arg not allowed
  $r = ($r == null ? randomRGB() : $r);
  $g = ($g == null ? randomRGB() : $g);
  $b = ($b == null ? randomRGB() : $b);
  return "rgb(".$r.",".$g.",".$b.")";
}

echo "Default random: ".@makeColor()."\n"; //suppress missing arg warning
echo "Passed args: ".makeColor(123, 32, 12)."\n";
?>
