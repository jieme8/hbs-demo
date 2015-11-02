var express = require('express');
var hbs = require('hbs');
var index = require('./routes');
var app = express();



app.set('view engine', 'html');  // 用hbs作为模版引擎
app.engine('html', hbs.__express);//配置html指向hbs
app.set('views', __dirname + '/views'); // 模版所在路径

hbs.registerHelper('helper_name',function(req,res){console.log('111111111')})
hbs.registerPartial('partials_name','partials_value');


hbs.registerPartials(__dirname + '/views');//设置调用模版路径 {{> head}}  空格 －  以 _ 表示
hbs.localsAsTemplateData(app);//设置模版全局变量
app.locals.hbsVar1 = "hbsVar1"; //模版全局变量


app.use("/",index);

app.listen(5858);

module.exports = app;
