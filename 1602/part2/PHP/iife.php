<?php
// php 7 only
(function() {
    echo("I've been called!\n");
})();

//php 5 compatible
call_user_func(function () {
    echo "Me too!\n";
  });
?>
