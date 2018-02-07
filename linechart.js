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

monthSales2 = [
  {"month":10, "sales":100},
  {"month":20, "sales":130},
  {"month":30, "sales":250},
  {"month":40, "sales":300},
  {"month":50, "sales":265},
  {"month":60, "sales":225},
  {"month":70, "sales":180},
  {"month":80, "sales":120},
  {"month":90, "sales":145},
  {"month":100, "sales":130},
];

let lineFun2 = d3.svg.line()
                .x(function(d) {return d.month*2;})
                .y(function(d) {return h - d.sales;})
                .interpolate("linear");

let svg2 = d3.select("body")
            .append("svg")
            .attr({width:w, height:h})
            .attr("style", "outline: thin solid blue;"); //adding red outline
            ;

let viz2 = svg2.append("path")
            .attr({
              d: lineFun2(monthSales2),
              "stroke": "purple",
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
                x: function(d) { return d.month + 25;},
                y: function(d) {return h-d.sales;}
              })
