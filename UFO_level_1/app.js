// from data.js
var ufoData = data;
var table = d3.select("tbody");

function buildTable (tableData) {
    table.html ("");
    tableData.forEach((tableRow) => {
        var row = table.append("tr")
        Object.values(tableRow).forEach((value) => {
            var dataCell = row.append("td")
            dataCell.text(value)
        })
    })
}

buildTable(ufoData);

var button = d3.select("#filter-btn");

button.on('click', function() {
    d3.event.preventDefault;
    var inputValue = d3.select('#datetime').property('value');
    var ufoDate = ufoData.filter(function(ufo) {
        return ufo.datetime === inputValue;
    });
    buildTable(ufoDate)
});

