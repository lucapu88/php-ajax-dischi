<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>dischi musicali AJAX</title>
    <link href="https://fonts.googleapis.com/css?family=Kanit&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../public/css/app.css">
  </head>
  <body>
    <header>
      <select class="trovaAlbum" name="">
        <option value="">Scegli un genere</option>
        <option value="pop">Pop</option>
        <option value="rock">Rock</option>
        <option value="metal">Metal</option>
        <option value="jazz">Jazz</option>
      </select>
    </header>
    <main>
      <div class="dischi-container">
      </div>
    </main>

    <script id="myTemplate" type="text/x-handlebars-template"> <!-- contenitore del disco che verrà appeso con js -->
      <div class="disco-singolo" dataGenere={{genere}}>
        <img class="copertina" src={{imgCopertina}} alt="{{titolo}}">
        <h3 class="titolo">{{titolo}}</h3>
        <p class="artista">{{artista}}</p>
        <p class="anno">{{anno}}</p>
      </div>
    </script>

    <script src="../public/JS/main.js" charset="utf-8"></script>
  </body>
</html>
