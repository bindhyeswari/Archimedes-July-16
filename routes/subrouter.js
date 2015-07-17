/**
 * Created by mishrab on 7/17/15.
 */

var mongoose = require('mongoose');
var schemaType = mongoose.Schema;
// todo: get the schematype and ObjectID
var restgenerator = require('../module/simple_rest_generator');

mongoose.connect('mongodb://localhost/test', function (err) {
    console.log(err);
    if (!err) console.log('successfully connected to mongodb ... ');
    else console.log('was not able to connect to mongodb ... ');
});

var Contact = mongoose.model('contact', {
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    tel: {
        type: String,
        required: true
    }
});

var Order = mongoose.model('order', {
    items: schemaType.Types.Mixed,
    contact_id: {
        type: String, // ObjectId instead of a string
        required: true
    }
});



module.exports = function (app) {

    app.use('/contacts', restgenerator(Contact));
    app.use('/orders', restgenerator(Order));

};