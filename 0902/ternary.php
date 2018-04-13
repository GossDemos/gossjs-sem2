<?php
  $age = 17;
  $restricted = ($age < 18) ? 'yes' : (($age == 18) ? 'not sure' : 'no');
  echo $restricted;
?>
