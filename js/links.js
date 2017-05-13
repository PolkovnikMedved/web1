var links = {
  data: 'data.html',
  contact: 'contact.html',
  welcome: 'index.html'
};

function goToLink(url)
{
  window.location.href = url;
}

var data = document.getElementById('data');
var welcome = document.getElementById('welcome');
var contact = document.getElementById('contact');

data.addEventListener('click', function(e){e.preventDefault();goToLink(links['data'])});
welcome.addEventListener('click', function(e){e.preventDefault();goToLink(links['welcome'])});
contact.addEventListener('click', function(e){e.preventDefault();goToLink(links['contact'])});