var benArray = [
"There is no way to know",
"On the phone",
"Watching telly",
"Taking a poo",
"He has just pooed himself, give him time",
"He is adding BBQ sauce to food",
"He is doing refinement level 2",
"He is on the nursery run",
"He is having a head down day",
"Doing 'admin'",
"Has he just handed you a project? You're fucked",
"Probably stealing your stuff",
"Next to you, but he is not listening"
];

var randomBenLocation = benArray[Math.floor(Math.random()*benArray.length)];
var btn = document.getElementById('btn');
var btnTryAgain = document.getElementById('tryAgain')
var spinner = document.getElementById('spinner');
var benLocation = document.getElementById('location');


btn.addEventListener("click", function() {
  spinner.style.display = "block";
  btn.style.display = "none";
  setTimeout(function(){
    spinner.style.display = "none";
    benLocation.innerHTML = randomBenLocation;
    btnTryAgain.style.display = "flex";
  }, 2000);
});

btnTryAgain.addEventListener("click", function() {
  var randomBenLocation = benArray[Math.floor(Math.random()*benArray.length)];
  benLocation. innerHTML = "";
  btnTryAgain.style.display = "none";
  spinner.style.display = "block";
  btn.style.display = "none";
  setTimeout(function(){
    spinner.style.display = "none";
    benLocation.innerHTML = randomBenLocation;
    btnTryAgain.style.display = "flex";
  }, 2000);
});
