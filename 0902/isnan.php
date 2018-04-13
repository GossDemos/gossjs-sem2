<?php
//written in collab with Arif

$input = NAN;
// $input = 0;
// $input = NULL;
// $input = '';
// $input = 'A';
// $input = 1;

 $output = (
  ($input === 0) ? "=0" :
   (($input === NULL) ? "=null" :
    (($input === '') ? "=''" :
    ((is_string($input)) ? "Something else" :
     ((is_numeric($input) & !is_nan($input)) ? "Something else" :
         "=NAN"))))
);

echo $output. PHP_EOL;
?>
