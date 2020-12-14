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
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
    var shape = document.getElementById('shape').value;
    console.log(date);
    console.log(city);
    console.log(state);
    console.log(country);
    console.log(shape);

    var filtertable = tableData.filter(item => item.datetime.includes(date) && item.city.includes(city) && item.state.includes(state) && item.country.includes(country) && item.shape.includes(shape));
    console.log(filtertable);

    var tbody = d3.select("tbody");
    tbody.html("");
    filtertable.forEach(function (filtertable) {
        var row1 = tbody.append("tr");
        Object.entries(filtertable).forEach(function ([key, value]) {
            console.log(key, value);
            var cell1 = row1.append("td");
            cell1.text(value);
        });
    });
});




