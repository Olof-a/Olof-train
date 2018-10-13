// var dataset = [10,20,30,40,50]
// var el = d3.select('body')
// // .append('p')
// // .attr('class','foo bar')
// // .classed('foo',true)
// // .classed('bar',true)
// // .attr('id','bar')
// // .style('color','red')
// // .text('hello world')
//     // .selectAll('div')
//     .select('p')
//     .data(dataset)
//     .enter()
//     .append('div')
//     .text(function(d){
//         return d
//     })
//     .attr('class',function(d){
//         if(d>25){
//             return 'foo'
//         }else{
//             return 'bar'
//         }
//     })
//     .style('color',function(d){
//         if(d<25){
//             return 'red'
//         }else{
//             return 'pink'
//         }
//     })
//
// console.log(el);

var data = [];

for(var i = 0;i<20;i++){
    var num = Math.floor(Math.random() * 50)
    data.push(num)
}
//创建SVG元素
var chart_width = 800
var chart_height = 400
var bar_padding = 5
var svg = d3.select('#chart')
    .append('svg')
    .attr('width', chart_width)
    .attr('height', chart_height)
//绑定数据和创建条形图
svg.selectAll('div')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', function(d,i){
        return i * (800 / data.length)
    })
    .attr('y', function(d){
        return chart_height - d * 5
    })
    .attr('width', chart_width / data.length - bar_padding)
    .attr('height', function(d){
        return d * 5
    })
    .style('fill','red')

//添加label
svg.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .text(function(d){
        return d
    })
    .attr('x', function(d,i){
        return i * (800 / data.length) + 8
    })
    .attr('y', function(d){
        return chart_height - d * 5 + 20
    })
    .attr('font-size', 14)
    .attr('fill', 'white')
