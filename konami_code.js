const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

const body = document.getElementsByTagName("body");
body.addEventListener('keydown', function(e)) {

function init() {
  // Write your JavaScript code inside the init() function
   const key = parseInt(e.detal || e.which);

  function onKeyDownHandler(e) {
   if (key === code[index]) {
     index++;

    if (index === code.length)
    {
     alert("Congratulations!");

     index = 0;
   }
 } else {
  index = 0;
        }
  }
}
});
