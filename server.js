var http = require('http');
const https = require('https');

const options = {
  hostname: 'api.douban.com',
  port: 443,
  path: '/v2/movie/top250',
  method: 'GET'
};
var str = '';
var arr = [];
const req = https.request(options, (res) => {
  res.on('data', (d) => {
    str+=d
  });
  res.on('end',()=>{
    var list=JSON.parse(str).subjects
    list.map(function(item){
        arr.push(item.title)
    })

  })
});
http.createServer((req,res)=>{
	res.writeHead(200,{'content-type':'text/html;charset=utf-8','Access-Control-Allow-Origin':'*'})
	if(req.url!='/favicon.ico'){
		res.write(JSON.stringify(arr))
		res.end()
	}
}).listen(3000)


req.on('error', (e) => {
  console.error(e);
});
req.end();
