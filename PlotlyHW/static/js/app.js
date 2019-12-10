function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel

  // Use `d3.json` to fetch the metadata for a sample
    // Use d3 to select the panel with id of `#sample-metadata`
    // Use `.html("") to clear any existing metadata
    metaurl = `/metadata/${sample}`
    d3.json(metaurl).then(function(data) {
    
      var metasample = d3.select("#sample-metadata");
      metasample.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.

      Object.entries(data).forEach(([key, value]) => {
      var cell = metasample.append("p");
      cell.text(`${key}: ${value}`);
    });
  });

    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);
};

function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
  sampleurl = `/samples/${sample}`
  d3.json(sampleurl).then(function(data) {

    // @TODO: Build a Bubble Chart using the sample data

    var bubble = [{
      x: data.otu_ids,
      y: data.sample_values,
      type: "scatter",
      mode: "markers",
      marker: {
        size: data.sample_values,
        color: data.otu_ids
      },
      text: data.otu_labels
    }];
    var bubblelayout = {
      xaxis: { title: "OTU Chart"}
    };
    Plotly.newPlot("bubble", bubble, bubblelayout);

    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).

    sampleurl = `/samples/${sample}`
    d3.json(sampleurl).then(function(data) {

    var sample_values = data.sample_values.slice(0,10);
    var otu_ids = data.otu_ids.slice(0,10);
    var otu_labels = data.otu_labels.slice(0,10);
    var data = [data];

    var pie = {
      values: sample_values,
      labels: otu_ids,
      hovertext: otu_labels,
      type: "pie"
    };

    var data = [pie];

    var pielayout = {
      height: "500",
      width: "600",
    }
    
    Plotly.plot("pie", pie, pielayout);

    });

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
