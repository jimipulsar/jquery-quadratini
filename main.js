//Creare una griglia formata da 8x8 quadratini tutti bianchi. 15 di questi quadratini, scelti a caso all'inizio, se cliccati diventano rossi, gli altri diventano verdi. Sopra alla griglia deve esserci un contatore che conta quanti sono rossi e quanti verdi sono stati scoperti.

var n = 0;
$(".quadrato1").one( "click", function() {
  var index = $( ".quadrato1" ).index( this );
  $( this ).css({
    borderStyle: "inset",
    cursor: "auto"
  });
  $( "h1" ).text( "Quadrati rossi selezionati:" + (++n));
});

$(".quadrato1").click(function(){
  $(this).css("background-color", "red");
});

var k = 0;
$(".quadrato").one( "click", function() {
  var index = $( ".quadrato" ).index( this );
  $( this ).css({
    borderStyle: "inset",
    cursor: "auto"
  });
  $( "h2" ).text( "Quadrati verdi selezionati:" + (++k));
});

$(".quadrato").click(function(){
  $(this).css("background-color", "green");
});
