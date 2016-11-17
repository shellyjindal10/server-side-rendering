require('babel-register')({
  presets: ['react']
});
var express = require('express');
var app = express();
var PORT = 3005
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./Component.jsx');

app.use(express.static('public'));
app.get('/', function(request, response) {
  var html = ReactDOMServer.renderToString (
    React.createElement(Component)
  );
  response.send(html);
})

app.listen(PORT, function(){
	console.log('http://localhost:' + PORT);
});

