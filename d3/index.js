var dataset = [10,20,30,40,50]
var el = d3.select('body')
// .append('p')
// .attr('class','foo bar')
// .classed('foo',true)
// .classed('bar',true)
// .attr('id','bar')
// .style('color','red')
// .text('hello world')
    // .selectAll('div')
    .data(dataset)
    .enter()
    .append('div')
    .text('hello world')

console.log(el);
