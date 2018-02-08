const h = 300;
const w = 500;

monthSales = [
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


//KPI
function salesKPI(d){
  let benchmark = 125;
  if (d>benchmark) {return "#33CC66"; }
  else if (d<= benchmark) {return "#666666"; }
}

function showMinMax(ds, col, val, type){
  let max = d3.max(ds, function(d){return d[col]; });
  let min = d3.min(ds, function(d){return d[col]; });

  if(type=='minmax' && (val==max || val==min)){
    return val;
  } else if (type == "all") {
    return val;
  }
}

//create our svg2

const svg = d3.select("body")
              .append("svg")
              .attr({
                width: w,
                height: h,
                "style": "outline: thin solid green"
              });

//add dots
let dots = svg.selectAll("circle")
            .data(monthSales)
            .enter()
            .append("circle")
            .attr({
              cx: function(d) { return d.month * 3;},
              cy: function(d) { return h-d.sales; },
              r: 5,
              "fill": function(d) {return salesKPI(d.sales);}
            });

//labels
let labels = svg.selectAll("text")
              .data(monthSales)
              .enter()
              .append("text")
              .attr({
                  x: function(d) {return (d.month * 3) - 25;},
                  y: function(d) {return h-d.sales; },
                  "font-size": "12px",
                  "font-family": "sans-serif",
                  "fill": "#666666",
                  "text-anchor": "start"
              })
              .text("dan")
              .text(function(d) {return showMinMax(monthSales,
                                                    'sales',
                                                    d.sales,
                                                    'minmax' // or 'all'
                                                  )
                                  }
                    )
              ;
