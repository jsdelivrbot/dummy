const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.set('port', (process.env.PORT || 5000));

// form input page
app.get('/', function(req, res) {
    res.render('pages/index');
});

var formInput={};

app.post('/', function(request, response){
    formInput = {
        firstName: request.body.firstName, 
        lastName: request.body.lastName, 
        userName: request.body.userName,
        email: request.body.email,
        dob: request.body.dob,
        gender: request.body.gender,
        employeeCode: request.body.employeeCode
    };
    response.render('pages/formData', { formInput: formInput });
});

// form data page
app.get('/formData', function(req, res) {
    res.render('pages/formData', { formInput: formInput });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});