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


var date_entry = d3.select("#datetime");

date_entry.on("change", function () {
    var date = d3.event.target.value;
    console.log(date);
    var filterDates = tableData.filter(sighting => sighting.datetime === date);
    var tbody = d3.select("tbody");
    tbody.html("");
    filterDates.forEach(function (filterDates) {
        console.log(filterDates);
        var row1 = tbody.append("tr");
        Object.entries(filterDates).forEach(function ([key, value]) {
            console.log(key, value);
            var cell1 = row1.append("td");
            cell1.text(value);
        });
    });
    date_entry.reset();
})