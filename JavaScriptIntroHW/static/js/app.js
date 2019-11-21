// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// function for submit button
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input value from the form
    var userdate = d3.select("#datetime").property("value");
    console.log(userdate);

    //filter
    filtered = tableData.filter((row) => row.datetime === userdate);
  
    // Build the table
    buildTable(tableData);
}


// function to build table
function buildTable(data) {
    //tbody.text("");
    data.forEach((uforow) => {
        var tablerow = tbody.append("tr");
        Object.entries(uforow).forEach((value) => {
        var cell = tablerow.append("td");
        cell.text(value);
        });
    });
}
  
  
d3.select("#filter-btn").on("click", handleSubmit);