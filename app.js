var express = require('express');
var hbs = require('hbs');
var app = express();



app.set('view engine', 'html');  // 用hbs作为模版引擎
app.engine('html', hbs.__express);//配置html指向hbs
app.set('views', __dirname + '/views'); // 模版所在路径
app.get('/', function(req, res){
  res.render('index', {title: 'hbs demo', author: 'chyingp'});
});
app.listen(5858);   