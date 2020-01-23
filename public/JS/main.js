/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/JS/main.js":
/*!************************!*\
  !*** ./src/JS/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var template_html = $('#myTemplate').html(); //recupero il codice html del template

  var template_function = Handlebars.compile(template_html); //do in pasto a handlebars il codice html

  $.ajax({
    url: 'data.php',
    method: 'get',
    success: function success(data) {
      var dischi = JSON.parse(data);

      for (var i = 0; i < dischi.length; i++) {
        var context = {
          //creo la variabile con il contenuto che andrà nel template.
          imgCopertina: dischi[i].poster,
          titolo: dischi[i].title,
          artista: dischi[i].author,
          anno: dischi[i].year,
          genere: dischi[i].genre
        };
        var disco = template_function(context); // utilizzando la funzione generata da handlebars, creo l'html finale

        $('.dischi-container').append(disco); // infine vado ad appendere nel container il mio template che si ripeterà fino alla lunghezza dell'array $dischi
      }
    },
    error: function error(err) {
      alert('error');
    }
  });
  $('.trovaAlbum').change(function () {
    //verifico se il genere dell'album corrisponde al genere selezionato
    var genereSelect = $('.trovaAlbum').val(); //creo una var che mi prende il genere selezionato dal select (ovvero prende il value nell'option)

    if (genereSelect == '') {
      // se il genere selezionato è uguale ad una stringa vuota, ovvero è impostato su 'Scegli un genere' (che non ha val)
      $('.disco-singolo').fadeIn(); //mostra tutti i div 'disco-singolo'
    } else {
      //altrimenti, se è impostato su una delle tipologie di generi (rock metal ecc...)
      $('.disco-singolo').each(function () {
        //vado a verificare per ogni singolo div
        var genere = $(this).attr('dataGenere'); //creo una var che mi prende l'attributo del data corrispondente

        if (genere.toLowerCase() == genereSelect.toLowerCase()) {
          //se il genere del dataGenere attribuito al div è uguale al genere del value selezionato dal select:
          $(this).fadeIn(); //allora lo mostro
        } else {
          $(this).fadeOut(); //altrimenti lo nascondo
        }
      });
    }
  });
});

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/JS/main.js ./src/scss/app.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\lucar\Desktop\Boolean #8\3.laravel-PHP\5-ricerca-dischi-php\src\JS\main.js */"./src/JS/main.js");
module.exports = __webpack_require__(/*! C:\Users\lucar\Desktop\Boolean #8\3.laravel-PHP\5-ricerca-dischi-php\src\scss\app.scss */"./src/scss/app.scss");


/***/ })

/******/ });