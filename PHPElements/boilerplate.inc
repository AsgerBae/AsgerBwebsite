<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>AsgerB</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <link href="css.css" rel="stylesheet" type="text/css">
        <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300' rel='stylesheet' type='text/css'>
    </head>
    <body id='page'>
        <div id="container">
            <header>AsgerB</header>
            <div id="replace-nav"></div>
            <nav id="navbar">
                <div id="mobile-select">|||</div>
                <ul id="navbar-list">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li id="projects">Projects
                        <ul>
                            <li>Meow</li>
                            <li>Meow</li>
                            <li>Meow</li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <main>
                <?php global $main; echo main; ?>
            </main>
            <footer>
                <ul id="footer-list">
                    <li>Lavet af AsgerB</li>
                    <li><a href="mailto:asger@nalnet.dk">asger@nalnet.dk</a></li>
                    <li>Other Info</li>
                </ul>
            </footer>
            <script src="js.js" type="text/javascript"></script>
        </div>
    </body>
</html>