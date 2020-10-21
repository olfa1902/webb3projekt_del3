<?php
/*Session and stored information is deleted*/
session_start();
session_unset();
session_destroy();


header("Location: http://studenter.miun.se/~olfa1902/Webbutveckling_III/Projektuppgift/Webbplats/pub/");
exit();