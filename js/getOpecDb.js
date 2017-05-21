/**
 * This is an ajax callback function that will
 * draw our table with the data received as JSON
 *
 * @param: data (JSON)
 */
function parseOpecData(data)
{
    // Our data
    var tableRow;
    var tableColumnIndex;
    var tableColumnDate;
    var tableColumnPrice;
    var tableBody = document.getElementById('table-body');
    var opecData = JSON.parse(data);
    var dbName = opecData.dataset.name;
    var dbDescription = opecData.dataset.description;
    var timeMoney = opecData.dataset.data;

    // Append title + description to our page
    document.getElementById('name').innerText = dbName;
    document.getElementById('description').innerText = dbDescription;

    // Create a table row for every data row
    timeMoney.forEach(function(element, index)
    {
        tableRow = tableBody.insertRow(index);
        tableColumnIndex = tableRow.insertCell(0);
        tableColumnDate = tableRow.insertCell(1);
        tableColumnPrice = tableRow.insertCell(2);

        tableColumnIndex.innerHTML = index;
        tableColumnDate.innerHTML = element[0];
        tableColumnPrice.innerHTML = element[1];
    })
}
ajaxRequest(externalLinks['opec'], "GET", parseOpecData, true);
