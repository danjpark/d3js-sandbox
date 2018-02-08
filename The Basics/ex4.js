let w = 200;
let h = 100;
let padding = 2;
let dataset = [5,10,15,20,25];

let svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("style", "outline: thin solid red;");

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
    .attr("x", function(d, i) {return (i * (w / dataset.length));})
    .attr("y", function(d){return h - d;})
    .attr("width", w / dataset.length - padding)
    .attr("height", function(d) {return d * 40;});
