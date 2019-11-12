var rnd;
function onclickHandler(e) {
  rnd = Math.floor(100000 + Math.random() * 900000);
  document.getElementById('tb').value = rnd;
  console.log(`random number: ${rnd}`);
  var info = document.querySelector('.info');
  localStorage.setItem('number', rnd);
  info.style.display = 'none';
  var dispalyInfo = false;
  // e.preventDefault();
  if (dispalyInfo) {
    info.style.display = 'none';
    dispalyInfo = false;
  } else {
    info.style.display = 'initial';
    dispalyInfo = true;
  }
  // document.getElementById('info') = "Refreshing the page in 5 seconds...."
  span = document.getElementById('refresh');
  txt = document.createTextNode('Refreshing the page in 5 seconds....');
  span.appendChild(txt);
  setTimeout(function() {
    location.reload(true);
    //   alert("The page will now refresh");
    window.location.href = 'guessnumber.html';
  }, 5000);
}
function numberGuess() {
  var temp = document.getElementById('tb2').value;
  let storedRandomNumber = localStorage.getItem('number');
  var guesses = 5;
  if (temp === storedRandomNumber) {
      var s = "Correct Guess!";
    document.getElementById("Guesses").innerHTML = s;
    // alert(`Correct Guess!`);
  } else {
    // console.log(`Reached inside else block condition`)
    // guess = document.createTextNode(`${guesses - 1} Correct Guesses!`);
    // document.write(JSON.stringify(guess));
    var s = `${guesses - 1} Correct Guesses!`;
    document.getElementById("Guesses").innerHTML = s;
    // alert(`${guesses - 1} Correct Guesses!`)
  }
}

function resetGame() {
    window.location.href = 'guessnumber.html';
}