var $ = require('jquery'); //includo jquery
const Handlebars = require("handlebars"); //includo handlebars
$(document).ready(function(){
  var template_html = $('#myTemplate').html();//recupero il codice html del template
  var template_function = Handlebars.compile(template_html);//do in pasto a handlebars il codice html
  $.ajax({
    url : 'data.php', //recupero il file php contenente i dati
    method : 'get',
    success : function(data) {
      var dischi = JSON.parse(data); //recupero il contenuto dell'array dentro al file data.php
      for (var i = 0; i < dischi.length; i++) { //ciclo la lunghezza dell'array
        var context = { //creo la variabile con il contenuto che andrà nel template.
          imgCopertina : dischi[i].poster,
          titolo : dischi[i].title,
          artista : dischi[i].author,
          anno : dischi[i].year,
          genere : dischi[i].genre
      }
      var disco = template_function(context); // utilizzando la funzione generata da handlebars, creo l'html finale
      $('.dischi-container').append(disco); // infine vado ad appendere nel container il mio template che si ripeterà fino alla lunghezza dell'array $dischi
      }
    },
    error : function(err) {
      alert('error');
    }
  });
  $('.trovaAlbum').change(function(){ //verifico se il genere dell'album corrisponde al genere selezionato
      var genereSelect = $('.trovaAlbum').val() //creo una var che mi prende il genere selezionato dal select (ovvero prende il value nell'option)
    if (genereSelect == '') { // se il genere selezionato è uguale ad una stringa vuota, ovvero è impostato su 'Scegli un genere' (che non ha val)
      $('.disco-singolo').fadeIn(); //mostra tutti i div 'disco-singolo'
    } else { //altrimenti, se è impostato su una delle tipologie di generi (rock metal ecc...)
      $('.disco-singolo').each(function(){ //vado a verificare per ogni singolo div
        var genere = $(this).attr('dataGenere'); //creo una var che mi prende l'attributo del data corrispondente
        if (genere.toLowerCase() == genereSelect.toLowerCase()) { //se il genere del dataGenere attribuito al div è uguale al genere del value selezionato dal select:
          $(this).fadeIn(); //allora lo mostro
        } else {
          $(this).fadeOut(); //altrimenti lo nascondo
        }
      });
    }
  });
});
