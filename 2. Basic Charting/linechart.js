const h = 300;
const w = 300;

monthSales = [
  {"month":10, "sales":20},
  {"month":20, "sales":14},
  {"month":30, "sales":20},
  {"month":40, "sales":21},
  {"month":50, "sales":15},
  {"month":60, "sales":22},
  {"month":70, "sales":9},
  {"month":80, "sales":6},
  {"month":90, "sales":23},
  {"month":100, "sales":7},
];

let lineFun = d3.svg.line()
                .x(function(d) {return d.month*2;})
                .y(function(d) {return d.sales;})
                .interpolate("linear");

let svg = d3.select("body")
            .append("svg")
            .attr({width:w, height:h})
            .attr("style", "outline: thin solid red;"); //adding red outline
            ;

let viz = svg.append("path")
            .attr({
              d: lineFun(monthSales),
              "stroke": "purple",
              "stroke-width": 2,
              "fill": "none"
            })



//------------------------------------------

console.log("dan");

monthSales2 = [
  {"month":10, "sales":50},
  {"month":20, "sales":130},
  {"month":30, "sales":150},
  {"month":40, "sales":190},
  {"month":50, "sales":165},
  {"month":60, "sales":115},
  {"month":70, "sales":180},
  {"month":80, "sales":60},
  {"month":90, "sales":75},
  {"month":100, "sales":80},
];

let lineFun2 = d3.svg.line()
                .x(function(d) {return d.month*2;})
                .y(function(d) {return h - d.sales;})
                // .interpolate("linear");
                .interpolate("basis");


let svg2 = d3.select("body")
            .append("svg")
            .attr({width:w, height:h})
            .attr("style", "outline: thin solid green;"); //adding outline


let viz2 = svg2.append("path")
            .attr({
              d: lineFun2(monthSales2),
              "stroke": "#ff0033",
              "stroke-width": 2,
              "fill": "none"
            })

// add lables
let labels = svg2.selectAll("text")
              .data(monthSales2)
              .enter()
              .append("text")
              .text(function(d){return d.sales;})
              .attr({
                x: function(d) { return d.month*2 - 15;},
                y: function(d) {return h-d.sales;},
                "font-size": "12px",
                "font-family": "sans-serif",
                "fill": "#666666",
                "text-anchor": "start",
                "dy": ".35em",
                "font-weight": function(d, i){
                  if (i === 0 || i == (monthSales2.length - 1)){
                    return "bold"; }
                  return "normal";
                  }
              })
