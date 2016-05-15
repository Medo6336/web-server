/**
 * Created by Medo on 5/14/2016.
 */

var express = require('express');
var middleware = require('./middleware')
var app = express();
var port = 6336;


//app.use(middleware.requireAuthentication); // global
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (request, response) {
    response.send('about page!')
});

app.use(express.static(__dirname + "/public")); // the folder with all our html and css and js

app.listen(port, function () {
    console.log("Express server started on port " + port)
});