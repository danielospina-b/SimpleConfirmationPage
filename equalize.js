const params = new URLSearchParams(window.location.search);

var table = document.getElementById("mainTable");

for (const [key, value] of params) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = key;
    cell2.innerHTML = value;
    cell2.setAttribute("class", "table-align-right");
}
