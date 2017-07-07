const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
//import {connect} from './connect'

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.set('port', (process.env.PORT || 5000));

//form input page
app.get('/', function(req, res) {
    res.render('pages/index');
});

var formInput={};

app.post('/', function(request, response){
    // connect(function() {
    //     var Schema = mongoose.Schema;
    //     var userSchema = new Schema({
    //         name        : String,
    //         username    : { type: String, required: true, unique: true, default: this.name},
    //         password    : { type: String, required: true, default: "password"},
    //         admin       : { type: Boolean, default: false},
    //         cartId      : String
    //     });
    //     userSchema.pre(save, function(next){

    //     })
    //     userSchema.methods.init = function(){
    //         this.cartId = this.username+String(this.admin);
    //         var Cart = mongoose.model('Cart'+cartId, cartSchema);

    //     }

    //     var cartSchema = new Schema({
    //         cartId      : { type: String, unique: true }
    //         item        : {
    //             name    : String,
    //             cost    : Number,
    //             Vendor  : String,
    //             quantity: Number,
    //         }
    //         State       : String
    //     })

    //     var User = mongoose.model('User', userSchema);
    //     var form1 = new Data({
    //         firstName   : formInput.firstName, 
    //         lastName    : formInput.lastName, 
    //         userName    : formInput.userName,
    //         email       : formInput.email,
    //         dob         : formInput.dob,
    //         gender      : formInput.gender,
    //         employeeCode: formInput.employeeCode
    //     });
    //     form1.save(function (err, form1) {
    //       if (err) return console.error(err);
    //     });
    //     Data.find(function (err, forms) {
    //       if (err) return console.error(err);
    //       console.log(forms);
    //     })
    // });

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
