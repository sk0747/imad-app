var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
    title:'Article one |shashi kumar',
    heading:'Article one',
    date:'fab 17,2018',
    content: `<p>
                this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.
            </p>
            <p>
                this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.
            </p>
            <p>
                this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.this is the first content of my webapp.
            </p>`
    
};
function createTemplate (data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
}
var htmltemplate=`<!DOCTYPE html>
<html>
    <head>
        <title>
      ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
           ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
</html>
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/Article-one',function(req,res){
    res.send(createTemplate(Articleone));
});
app.get('/Article-two',function(req,res){
    res.send('Article two is requested and we will serve soon');
});
app.get('/Article-three',function(req,res){
    res.send('Article three is requested and we will serve soon');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
