var rnd;
function compare2num(a,b) {
  var c = a.toString();
  var d = b.toString();
  var set = [];
  var arr = [];
  var sum=0;
  // console.log(c);
  // console.log(d);
  console.log(d.length);
  for(var i=0;i<c.length;i++)
  {
    // console.log(c[i]);
    set.push(c[i]);
    // console.log(d[i]);
    arr.push(d[i]);
  }  
  // console.log(set1);
  // console.log(set);
  for(var i=0;i<d.length;i++)
  {
    if (set[i]==arr[i]){
      sum++;
      // console.log(item);
      // console.log(items);
      // console.log(sum);
  }
}
  // localStorage.setItem('digits', sum);
  return sum;
}
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
  // console.log(storedRandomNumber);
  // console.log(temp);
  if (temp == null)
  {
    alert("Please enter a number!")
  }
  var guesses=compare2num(temp,storedRandomNumber);
  // console.log(guesses);
  // console.log(`Reached inside else block condition`)
  // guess = document.createTextNode(`${guesses - 1} Correct Guesses!`);
  // document.write(JSON.stringify(guess));
  var s = `${guesses} Correct Guesses!`;
  document.getElementById("Guesses").innerHTML = s;
}

function resetGame() {
    window.location.href = 'index.html';
}