// This activity was designed to run multiple times. For each time uncomment once step, run the JavaScript code,
// comment the step again and move to the next step.

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

function displayTable(thisdata) {

  // Get a reference to the table body
  var tbody = d3.select("tbody");

  // Step 1: Loop Through `data` and console.log each  report object
  thisdata.forEach(function(ufo) {
  });

  // Step 2:  Use d3 to append one table row `tr` for each  report object
  // Don't worry about adding cells or text yet, just try appending the `tr` elements.
  // data.forEach(function(ufo) {
  //   var row = tbody.append("tr");
  // });

  // Step 3:  Use `Object.entries` to console.log each  report value
  thisdata.forEach(function(ufo) {
    var row = tbody.append("tr");

    Object.entries(ufo).forEach(function([key, value]) {
    });
  });

  // Step 4: Use d3 to append 1 cell per  report
  // data.forEach(function(ufo) {
  //   var row = tbody.append("tr");
  //
  //   Object.entries(ufo).forEach(function([key, value]) {
  //     // Append a cell to the row for each value
  //     // in the  report object
  //     var cell = row.append("td");
  //   });
  // });

  // Step 5: Use d3 to update each cell's text
  thisdata.forEach(function(ufo) {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
      // Append a cell to the row for each value
      // in the  report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // BONUS: Refactor to use Arrow Functions!
  thisdata.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log('INPUT VALUE', inputValue);

  // Set the span tag in the h1 element to the text
  // that was entered in the form
  d3.select("h1>span").text(inputValue);

  var filteredData = data.filter(function (d) {
    return d.datetime == inputValue;
  });
  console.log(filteredData)
  displayTable(filteredData);
}

displayTable(data)
