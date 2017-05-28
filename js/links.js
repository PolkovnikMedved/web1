/**
 * This function displays the navigation menu
 * when we click on data.
 */
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

// Event listener for data button
var data = document.getElementById('data');
data.addEventListener('click', function(e){e.preventDefault();displaySubMenu();});