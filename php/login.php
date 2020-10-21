
<!DOCTYPE html>
<head>
<title>Loginsida - Projektuppgift DT173G </title>
<link rel="stylesheet" type="text/css" href="../css/sass.css">
</head>

<!-- A session system is created where the credentials to log in and the redirection is created and assigned -->
<?php
session_start();
    if(isset($_POST['adminusername'])){
        $adminusername = $_POST['adminusername'];
        $password = $_POST['password'];

        if($adminusername == "admin" && $password == "password"){
            $_SESSION['adminusername'] = $adminusername;
            header("Location: admin.php");
        }
        else{
            $message = "Incorrect username/password!";
        }
    }
?>

<!-- HTML code representing a form where the input for username and password is submitted by the user -->
<h2>Log in</h2>

<h2>Psst! Correct username and password is: admin and password</h2>

<form method="post" action="login.php">
    <label for="adminusername">Admin-Username: </label>
    <br>
    <input type="text" name="adminusername" id="adminusername">
    <br>
    <label for="password">Password: </label>
    <br>
    <input type="password" name="password" id="password">
    <br>
    <input class="button" type="submit" value="Log in">

</form>