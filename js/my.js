$(document).ready(function() {

  var rootElement = document.getElementById( "impress" );
rootElement.addEventListener( "impress:init", function() {
  console.log( "Impress init" );
});
impress().init();
});
