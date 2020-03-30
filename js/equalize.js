const params = new URLSearchParams(window.location.search);
console.log(window.location.search);

var table = document.getElementById("mainTable");

for (const [key, value] of params) {
    console.log(key + "  " + value);
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = key;
    cell2.innerHTML = value;
}
