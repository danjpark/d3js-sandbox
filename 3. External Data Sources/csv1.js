
d3.select('body')
  .append('h1')
  .text('hello world!');

const h = 100;
const w = 400;
let dataset;


function buildLine(){
  let lineFun = d3.svg.line()
                  .x(function(d){return (d.month-20130001)/3.25;})
                  .y(function(d){return h-d.sales;})
                  .interpolate("linear");

  let svg=d3.select("body").append("svg")
            .attr({width: w,
                   height: h,
                   "style": "outline: thin solid red" //adding red outline
                 })

  let viz = svg.append("path")
                .attr({
                  d: lineFun(dataset),
                  "stroke": "purple",
                  "stroke-width": 2,
                  "fill": "none"
                });
}

d3.csv("./MonthlySales.csv", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    dataset = data;

    buildLine();

  }
});
