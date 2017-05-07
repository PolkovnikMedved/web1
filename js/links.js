var links = {
  data: 'data.html',
  contact: 'contact.html',
  welcome: 'index.html'
}

function goToLink(url)
{
  document.location.href = url;
};

var data = document.getElementById('data');
//data.addEventListener('click', (goToLink(links['data'])), false);
