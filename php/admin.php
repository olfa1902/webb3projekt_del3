<?php
session_start();
//Controlling if logged in
if (!isset($_SESSION['adminusername'])) {
    header("Location: login.php?message=You need to log in!");
}
?>

<!DOCTYPE html>

<head>
    <link rel="stylesheet" type="text/css" href="../css/sass.css">
    <link href="http://fonts.googleapis.com/css?family=Corben:bold" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Nobile" rel="stylesheet" type="text/css">
    <title>Adminwebbplats - Projektuppgift DT173G</title>
    <h2>Adminwebbplats - Projektuppgift DT173G</h2>
</head>

<body>
    <nav >
        <ul>
            <li onclick="window.location.href = 'http://studenter.miun.se/~olfa1902/Webbutveckling_III/Projektuppgift/Admin/php/logout.php'">Hem</li>
            <li onclick="window.location.href = 'http://studenter.miun.se/~olfa1902/Webbutveckling_III/Projektuppgift/Admin/php/admin.php';"> Adminsidan </li>
        </ul>
    </nav>
    <!-- div for storing the list of posts in one of the tables -->
    <h1> Utbildning</h1>
    <div id="adminstudier"></div>
    <!-- form for adding information to one of the tables -->
    <h2>Lägg till utbildning:</h2>
    <form>
        <label>Utbildningsplats: </label>
        <br>
        <input type="text" name="utbildningsplats" id="utbildningsplats">
        <br>
        <label>Utbildningsnamn: </label>
        <br>
        <input type="text" name="utbildningsnamn" id="utbildningsnamn">
        <br>
        <label>Startdatum(YYYY-MM-DD): </label>
        <br>
        <input type="text" name="startdatum" id="utbildningstartdatum">
        <br>
        <label>Slutdatum(YYYY-MM-DD): </label>
        <br>
        <input type="text" name="slutdatum" id="utbildningslutdatum">
        <br>
        <input type="submit" value="Lägg till Utbildning" id="addStudy" class="button">
    </form>

    <!-- form for updating information to one of the tables -->
    <h2>Uppdatera utbildning:</h2>
    <form>
        <label>Utbildningsplats: </label>
        <br>
        <input type="text" name="utbildningsplats" id="utbildningsplatsupdate">
        <br>
        <label>Utbildningsnamn: </label>
        <br>
        <input type="text" name="utbildningsnamn" id="utbildningsnamnupdate">
        <br>
        <label>Startdatum(YYYY-MM-DD): </label>
        <br>
        <input type="text" name="startdatum" id="utbildningstartdatumupdate">
        <br>
        <label>Slutdatum(YYYY-MM-DD): </label>
        <br>
        <input type="text" name="slutdatum" id="utbildningslutdatumupdate">
        <br>
        <label>Id:t på den användarpost du vill ändra: </label>
        <br>
        <input type="number" name="id" id="id">
        <br>
        <input type="submit" value="Uppdatera Utbildning" id="updateStudy" class="button">
    </form>

    <!-- div for storing the list of posts in one of the tables -->
    <h1> Arbetslivserfarenhet</h1>
    <div id="adminarbetslivserfarenhet"></div>

    <!-- form for adding information to one of the tables -->
    <h2>Lägg till erfarenhet:</h2>
    <form>
        <label>Arbetsplats: </label>
        <br>
        <input type="text" name="arbetsplats" id="arbetsplats">
        <br>
        <label>Titel: </label>
        <br>
        <input type="text" name="titel" id="arbetstitel">
        <br>
        <label>Startdatum(YYYY-MM-DD): </label>
        <br>
        <input type="text" name="startdatum" id="arbetsstartdatum">
        <br>
        <label>Slutdatum(YYYY-MM-DD): </label>
        <br>
        <input type="text" name="slutdatum" id="arbetsslutdatum">
        <br>
        <input type="submit" value="Lägg till Erfarenhet" id="addExperience" class="button">
    </form>

    <!-- form for updating information to one of the tables -->
    <h2>Uppdatera erfarenhet:</h2>
    <form>
        <label for="arbetsplats">Arbetsplats: </label>
        <br>
        <input type="text" name="arbetsplats" id="arbetsplatsupdate">
        <br>
        <label>Titel: </label>
        <br>
        <input type="text" name="titel" id="arbetstitelupdate">
        <br>
        <label>Startdatum(YYYY-MM-DD): </label>
        <br>
        <input type="text" name="startdatum" id="arbetsstartdatumupdate">
        <br>
        <label>Slutdatum(YYYY-MM-DD): </label>
        <br>
        <input type="text" name="slutdatum" id="arbetsslutdatumupdate">
        <br>
        <label>Id:t på den användarpost du vill ändra: </label>
        <br>
        <input type="number" name="id" id="experienceid">
        <br>
        <input type="submit" value="Uppdatera Erfarenhet" id="updateExperience" class="button">
    </form>

    <!-- div for storing the list of posts in one of the tables -->
    <h1> Webbsidor</h1>
    <div id="adminwebbplatser"></div>

    <!-- form for adding information to one of the tables -->
    <h2>Lägg till Webbsida:</h2>
    <form>
        <label>Titel: </label>
        <br>
        <input type="text" name="titel" id="webbtitel">
        <br>
        <label>URL: </label>
        <br>
        <input type="text" name="url" id="url">
        <br>
        <label>Beskrivning: </label>
        <br>
        <input type="text" name="beskrivning" id="beskrivning">
        <br>
        <input type="submit" value="Lägg till Utbildning" id="addWebsite" class="button">
    </form>

    <!-- form for updating information to one of the tables -->
    <h2>Uppdatera webbsida:</h2>
    <form>
        <label>Titel: </label>
        <br>
        <input type="text" name="titel" id="webbtitelupdate">
        <br>
        <label>URL: </label>
        <br>
        <input type="text" name="url" id="urlupdate">
        <br>
        <label>Beskrivning: </label>
        <br>
        <input type="text" name="beskrivning" id="beskrivningupdate">
        <br>
        <label>Id:t på den användarpost du vill ändra: </label>
        <br>
        <input type="number" name="id" id="websiteid">
        <br>
        <input type="submit" value="Uppdatera Erfarenhet" id="updateWebsite" class="button">
    </form>

</body>
<script type="text/javascript" src="../js/scripts.js"></script>

<form action="logout.php">
    <input class="button" type="submit" value="Log Out" id="logoutbutton" />
</form>

<footer> <p>&copy;  2020 Oliver Farnskog - Mittuniversitetet</p> </footer>