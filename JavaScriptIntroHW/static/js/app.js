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

    filterData = tableData.filter((row) => row.datetime === userdate)
  
    // clear the input value
    // d3.select("#datetime").node().value = "";
  
    // Build the table
    buildTable(tableData);
}


// function to build table
function buildTable(tableData) {
    //tbody.text("");
    data.forEach((row) => {
        var row = tbody.append("tr");
        Object.entries(row).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
}
      

    // var table = d3.select("#ufo-table");
    // var tbody = table.select("tbody");
    // var trow;
    // for (var i = 0; i < inputvalue.length; i++) {
    //   trow = tbody.append("tr");
    //   trow.append("td").text(datetime[i]);
    //   trow.append("td").text(city[i]);
    //   trow.append("td").text(state[i]);
    //   trow.append("td").text(country[i]);
    //   trow.append("td").text(shape[i]);
    //   trow.append("td").text(durationMinutes[i]);
    //   trow.append("td").text(comments[i]);
    // }

  
  
  
d3.select("#filter-btn").on("click", handleSubmit);