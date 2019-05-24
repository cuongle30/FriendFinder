//Creating path when user visit the page
var path = require('path')

module.export = function (app){
    app.get('*', function (req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'))
    });

    app.get('/survey', function (req, res){
        res.sendFile(path.join(__dirname, '../public/survey.html'))
    });
}