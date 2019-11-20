// from data.js
var tableData = data;

// function for submit button
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input value from the form
    var userdate = d3.select("#datetime").node().value;
    console.log(userdate);

    // variable to connect input and table data
    var search = data.filter(userdate);
    console.log(search);
  
    // clear the input value
    // d3.select("#datetime").node().value = "";
  
    // Build the table
    buildTable(table);
}


// function to build table
function buildTable(date, city, State, Country, shape, duration, comments) {
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;
    for (var i = 0; i < search.length; i++) {
      trow = tbody.append("tr");
      trow.append("td").text(datetime[i]);
      trow.append("td").text(city[i]);
      trow.append("td").text(state[i]);
      trow.append("td").text(country[i]);
      trow.append("td").text(shape[i]);
      trow.append("td").text(durationMinutes[i]);
      trow.append("td").text(comments[i]);
    }
}
  
  
  
d3.select("#filter-btn").on("click", handleSubmit);