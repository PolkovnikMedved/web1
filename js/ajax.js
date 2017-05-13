var externalLinks = {
    opec: 'https://www.quandl.com/api/v3/datasets/OPEC/ORB.json'
};

/**
 * This function is a generic function for AJAX calls
 *
 * @param url (String)
 * @param method (String GET|POST)
 * @param callback (Function that handles the received data)
 * @param async (Boolean)
 */
function ajaxRequest(url,method,callback, async)
{
    var request = new XMLHttpRequest();
    request.open(method, url, async);

    // Success
    request.addEventListener('load', function(){
        if(request.status >= 200 && request.status < 400)
        {
            callback(request.responseText);
        }
        else
        {
            alert(request.status + " " + request.statusText);
        }
    });

    // Error
    request.addEventListener('error', function(){
        alert('An error occured calling url = ' + url);
    });

    request.send(null);
}

/**
 * This is one of our callback functions
 * @param response (String)
 */
function show(response)
{
    console.log(response);
}