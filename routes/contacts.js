/**
 * Created by mishrab on 7/15/15.
 */

var router = require('express').Router();
var uuid = require('uuid');
var mongoose = require('mongoose');

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
    tel: String
});
var contact = new Contact({
    name: 'Hamid', email: 'hamid2@gmail.com', tel: '8569513215'
});
contact.save(function (err, result) {
    console.log(err);
    //console.log(result);
});

Contact.find({email: 'hamid2@gmail.com'}, function (err, results) {
    console.log(results);
});

console.log(uuid.v4());

var contacts = [];

// this callback is executed for all get requests to /contacts
router.get('/', function (req, res) {
    res.status(200).json(contacts)
});

router.post('/', function (req, res) {

});

router.put('/contacts/:id', function (req, res) {
    console.log(req.params.id);
});


module.exports = router;
