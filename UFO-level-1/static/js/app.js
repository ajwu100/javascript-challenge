// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
data.forEach(function (tableData) {
    console.log(tableData);
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(function ([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});


var button = d3.select("#filter-btn");

button.on("click", function () {
    console.log(`clicked`);
    var date = document.getElementById('datetime').value;
    console.log(date);

    var filterDates = tableData.filter(item => item.datetime === date);
    console.log(filterDates);

    var tbody = d3.select("tbody");
    tbody.html("");
    filterDates.forEach(function (filterDates) {
        var row1 = tbody.append("tr");
        Object.entries(filterDates).forEach(function ([key, value]) {
            console.log(key, value);
            var cell1 = row1.append("td");
            cell1.text(value);
        });
    });
})