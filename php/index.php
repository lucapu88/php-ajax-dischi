<?php include 'data.php' ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>dischi musicali</title>
    <link href="https://fonts.googleapis.com/css?family=Kanit&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="php/style.css">
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
  <?php foreach ($dischi as $disco) { ?>
          <div class="disco-singolo">
            <img class="copertina" src="<?php echo $disco['poster']; ?>" alt="">
            <h3 class="titolo"><?php echo $disco['title']; ?></h3>
            <p class="artista"><?php echo $disco['author']; ?></p>
            <p class="anno"><?php echo $disco['year']; ?>}</p>
          </div>
  <?php } ?>
      </div>
    </main>
  </body>
</html>
