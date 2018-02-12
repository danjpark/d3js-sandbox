
d3.select('body')
  .append('h1')
  .text('hello world!');

const h = 100;
const w = 400;
let dataset;
let salesTotal = 0.0;

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

function showTotals(){
  let t = d3.select("body").append("table");

  //get total
  for(let i = 0; i < dataset.length; i++){
    salesTotal += dataset[i]["sales"]*1;
    console.log(salesTotal);
  }

  // add total to table
  let tr = t.selectAll("t")
            .data([1])
            .enter()
            .append("tr")
            .append("td")
            .text("Sales Total:" + salesTotal);
}



d3.csv("./MonthlySales.csv", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    dataset = data;

    buildLine();
    showTotals();

  }
});
