var express = require('express');
var app = express();

//设置跨域访问，方便开发
app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

//具体接口设置
app.get('/api/test',function(req,res,next){
    res.send({
        code:200,
        data:'FUCK U'
    });
});

var server = app.listen(3000,function(){
    var host = server.address().address;
    console.log('---'+host);
    var port = server.address().port;
    console.log('Mock Server listening at http://%s:%s',host,port);

});