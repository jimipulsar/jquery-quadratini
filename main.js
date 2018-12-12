//Creare una griglia formata da 8x8 quadratini tutti bianchi. 15 di questi quadratini, scelti a caso all'inizio, se cliccati diventano rossi, gli altri diventano verdi. Sopra alla griglia deve esserci un contatore che conta quanti sono rossi e quanti verdi sono stati scoperti.

for (var k = 0; k < 14; k++) {
  document.getElementsByClassName('quadrati')[0].innerHTML += '<div class="quadrato"></div>'
}
for (var i = 0; i < 48; i++) {
  document.getElementsByClassName('quadrati')[0].innerHTML += '<div class="quadrato1"></div>'
}


var k = 0;

$(document).ready(function() {
  var n = 0;
  $(".quadrato").one( "click", function() {
    var index = $( ".quadrato" ).index( this );
    $( this ).css({
      borderStyle: "inset",
      cursor: "auto"
    });
    $( "h1" ).text( "Quadrati rossi selezionati:" + (++k));
  });
});

  $(".quadrato1").click(function(){
    $(this).css("background-color", "red");
  });

  var i = 0;
  $(".quadrato1").one( "click", function() {
    var index = $( ".quadrato" ).index( this );
    $( this ).css({
      borderStyle: "inset",
      cursor: "auto"
    });
    $( "h2" ).text( "Quadrati verdi selezionati:" + (++i));
  });

  $(".quadrato").click(function(){
    $(this).css("background-color", "red");
  });

  $(".quadrato1").click(function(){
    $(this).css("background-color", "green");
  });
