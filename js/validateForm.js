function validateEmail(){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var email = document.forms["send-email"]["sender-mail"].value;
  if(email.match(mailformat))
  {
    document.forms["send-email"]["sender-mail"].style.backgroundColor = "mediumseagreen";
  }
  else
  {
    document.forms["send-email"]["sender-mail"].style.backgroundColor = "coral";
  }
}

function subjectNotEmpty()
{
  var brol = document.forms["send-email"]["sender-subject"].value;
  if(brol.length < 2)
  {
    document.forms["send-email"]["sender-subject"].style.backgroundColor = "coral";
  }
  else {
    document.forms["send-email"]["sender-subject"].style.backgroundColor = "mediumseagreen";
  }
}

function msgNotEmpty(id)
{
  var brol = document.forms["send-email"]["sender-message"].value;
  if(brol.length < 2)
  {
    document.forms["send-email"]["sender-message"].style.backgroundColor = "coral";
  }
  else {
    document.forms["send-email"]["sender-message"].style.backgroundColor = "mediumseagreen";
  }
}

function yo()
{
  var alert = document.createElement('div');
  alert.innerText = "Vous avez bien soumis le formulaire";
  alert.className = "alert";
  document.getElementById('alert').appendChild(alert);
}

var emailInput = document.forms["send-email"]["sender-mail"];
var emailSubject = document.forms["send-email"]["sender-subject"];
var emailMessage = document.forms["send-email"]["sender-message"];
var entireForm = document.forms["send-email"];
emailInput.addEventListener("input", validateEmail);
emailSubject.addEventListener("input", subjectNotEmpty);
emailMessage.addEventListener("input", msgNotEmpty);
entireForm.addEventListener("submit", function(e){e.preventDefault();yo();});
