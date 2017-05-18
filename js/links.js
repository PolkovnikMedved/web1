var links = {
  data: 'data.html',
  data2: 'data2.html',
  contact: 'contact.html',
  welcome: 'index.html'
};

function goToLink(url)
{
  window.location.href = url;
}

function displaySubMenu()
{
  var currentDisplay = document.getElementById('sub-menu');
  console.log("Current display = " + currentDisplay.style.display);

  if(currentDisplay.style.display === '')
  {
    currentDisplay.style.display = 'block';
  }
  else {
    currentDisplay.style.display = '';
  }
}

var data = document.getElementById('data');
var data1 = document.getElementById('data-1');
var data2 = document.getElementById('data-2');
var welcome = document.getElementById('welcome');
var contact = document.getElementById('contact');


data.addEventListener('click', function(e){e.preventDefault();displaySubMenu();});
data1.addEventListener('click', function(e){e.preventDefault();goToLink(links['data'])});
data2.addEventListener('click', function(e){e.preventDefault();goToLink(links['data2'])});
welcome.addEventListener('click', function(e){e.preventDefault();goToLink(links['welcome'])});
contact.addEventListener('click', function(e){e.preventDefault();goToLink(links['contact'])});
