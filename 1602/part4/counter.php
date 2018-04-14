<?php

function counter($n) {
  $c = $n;
  return function () use(&$c){
    return ++$c;
  };
};

$counter1 = counter(3);
echo $counter1();
echo $counter1();
echo $counter1();
