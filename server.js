var express = require('express');
var path = require('path');
var bodyparser=require('body-parser');

var app = express();
var controlleri=require('./controllers/controller_2');
var mongoose_controller=require('./controllers/mongoose_controller');

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyparser.urlencoded());

app.use(bodyparser.json());


app.get('/therapist_data',mongoose_controller.finds);

app.get('/era',controlleri.create);

app.post('/era',controlleri.book);

app.use('/js', express.static(__dirname));

app.get('*', function (req, res) {
    res.sendFile(__dirname+'/client/views/index.html');
});


app.listen(3000,function(){
  console.log("server strated");
})

// catch 404 and forward to error handler

module.exports = app;