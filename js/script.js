
$(document).ready(function () {

/* SMOOTH SCROLLING NAV */

// Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 50});

// Add smooth scrolling to all links inside a navbar
$("#myNavbar a, #home .scroll_down").on('click', function(event){

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash (#)
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if statement
});

/* STICKY NAV */

$(window).scroll(function(){
        if( $(this).scrollTop() > 450){
          $('nav').addClass('sticky');
        } else {
          $('nav').removeClass('sticky');
        }
});

var projects = [
	{'link': 'http://parfum505.000webhostapp.com/mexicanfood/', 'foto': 'mexicanfood.jpg', 'description': 'HTML template into WordPress'},
	{'link': 'http://parfum505.000webhostapp.com/bookshop/', 'foto': 'bookshop.jpg', 'description': 'PHP, MySQL, JS'},
	{'link': 'http://parfum505.000webhostapp.com/todolist/', 'foto': 'todoListPHP.jpg', 'description': 'PHP, MySQL, JQuery'},
	{'link': 'http://parfum505.000webhostapp.com/weatherapp', 'foto': 'weatherAngular.jpg', 'description': 'AngularJS 1.5, Bootstrap'},
	{'link': 'https://parfum505.github.io/angularJSprojects/LiveSearch/index.html#/list', 'foto': 'liveSearch.jpg', 'description': 'AngularJS 1.5'},
	{'link': 'https://parfum505.github.io/AJAX_JSON/TicTacToe/', 'foto': 'TicTacToe.jpg', 'description': 'JS, FCC project'},
	{'link': 'https://parfum505.github.io/twitchTV/build/', 'foto': 'twitchTV.jpg', 'description': 'JS, JSON, Twitch.tv API'},
	{'link': 'https://parfum505.github.io/pomodoroClock/', 'foto': 'pomodoroClock.jpg', 'description': 'JS, FCC project'},
	{'link': 'https://parfum505.github.io/searchYouTube/', 'foto': 'searchYouTube.jpg', 'description': 'JS, JSON, YouTube API'},
	{'link': 'https://parfum505.github.io/JS_Calculator/', 'foto': 'calculator.jpg', 'description': 'JS, FCC project'},
	{'link': 'https://codepen.io/Parfum505/full/ZORgYN/', 'foto': 'weatherApp.jpg', 'description': 'JQuery, JSON, Bootstrap, Forecast API'},
	{'link': 'http://codepen.io/Parfum505/full/NAzvjZ/', 'foto': 'quote.jpg', 'description': 'JQuery, JSON, Forismatic API'},
	{'link': 'http://codepen.io/Parfum505/full/dXqvyo/', 'foto': 'wiki.jpg', 'description': 'JQuery, JSON,Bootstrap, Wiki API'},
	{'link': 'https://parfum505.github.io/cheese/', 'foto': 'Chees_Selesky2.jpg', 'description': 'JQuery, HTML, CSS'},
	{'link': 'https://parfum505.github.io/Biz_Time/', 'foto': 'Biz_Time.jpg', 'description': 'JQuery, WOW.js'}
]
var projectHtml = '<div class="row">';

$.each(projects, function(){
	projectHtml += '<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">';
projectHtml += '<a href="'+ this['link'] + '" target="_blank">';
	projectHtml += '<img src="img/' + this.foto + '" class="img-responsive" alt="Image">';
	projectHtml += '<div class="description">'+ this.description + '</div>';
	projectHtml += '</a>';
	projectHtml += '</div>';
});
	projectHtml += '<div>';
	
$('#projects').append(projectHtml);
});