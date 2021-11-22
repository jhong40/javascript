var jq = document.createElement('script');
jq.src = "https://code.responsivevoice.org/responsivevoice.js";
document.getElementsByTagName('head')[0].appendChild(jq);


setInterval(myTimer, 5000);


function myTimer() {

  price = document.querySelector('[data-reactid="47"]');
  price=price.textContent;
  price= parseFloat(price.split(',').join(''));
  
  if (price>1173.00) {
    var msg = new SpeechSynthesisUtterance("One hundred years later");
    window.speechSynthesis.speak(msg)
  }
}
