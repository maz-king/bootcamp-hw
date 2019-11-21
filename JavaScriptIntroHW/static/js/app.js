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
    tbody.text("");
    data.forEach((uforow) => {
        var tablerow = tbody.append("tr");
        Object.entries(uforow).forEach((value) => {
        var cell = tablerow.append("td");
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