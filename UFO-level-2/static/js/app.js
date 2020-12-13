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


//var date_entry = d3.select("#datetime");
//var city_entry = d3.select("#city");
//var state_entry = d3.select("#state");
//var country_entry = d3.select("#country");
//var shape_entry = d3.select("#shape");
//var date = d3.event.target.value;




var date_entry = d3.select("#datetime");
var button = d3.select("#filter-btn");

button.on("click", function () {
    console.log(`clicked`);

    var date = d3.event.target.value;
    console.log(date);
    var filtertable = tableData.filter(sighting => sighting.datetime === date);
    //var city = d3.event.target.value;
    //var filtertable2 = filtertable.filter(sighting => sighting.city === city);
    //var state = d3.event.target.value;
    //var filtertable3 = filtertable2.filter(sighting => sighting.state === state);
    //var country = d3.event.target.value;
    //var filtertable4 = filtertable3.filter(sighting => sighting.country === country);
    //var shape = d3.event.target.value;
    //var filtertable5 = filtertable4.filter(sighting => sighting.shape === shape);
    console.log(filtertable);
    var tbody = d3.select("tbody");
    tbody.html("");
    filtertable.forEach(function (filtertable) {
        console.log(filtertable);
        var row1 = tbody.append("tr");
        Object.entries(filtertable).forEach(function ([key, value]) {
            console.log(key, value);
            var cell1 = row1.append("td");
            cell1.text(value);
        });
    });
})




