let w = 300;
let h = 300;
let padding = 2;
let dataset = [5,10,15,20,25];
let dataset2 = [5,10,15,20,25,22, 18, 7, 11];

function colorPicker(v){
  if (v<=20) {return "#666666";}
  else if (v>20) {return "#FF0033";}
}

let svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("style", "outline: thin solid red;"); //adding red outline

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
    .attr("x", (d, i) => {return (i * (w / dataset.length));})
    .attr("y", (d) => {return h - (d*4);})
    .attr("width", w / dataset.length - padding)
    .attr("height", function(d) {return (d * 4)})
    .attr("fill", function(d) {return "rgb(" + (d*10) + ",0,0)"});
// still dont fully get y and height and how they relate

let svg2 = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("style", "outline: thin solid blue;"); //adding red outline

  svg2.selectAll("rect")
      .data(dataset2)
      .enter()
      .append("rect")
        .attr({x: (d, i) => {return (i * (w / dataset2.length));},
               y: (d) => {return h - (d*4);},
               width: w / dataset2.length - padding,
               height: function(d) {return (d * 4)},
               fill: function(d) {return colorPicker(d)}
             });
            // still dont fully get y and height and how they relate
