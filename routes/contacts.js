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
    tel: {
        type: String,
        required: true
    }
});


// this callback is executed for all get requests to /contacts
router.get('/', function (req, res) {
    // find call to mongoose
    Contact.find(function (err, response) {
        if (err) {
            res.status(500).json({ message: 'Something Broke!' });
        } else {
            res.status(200).json(response);
        }
    });
});

router.post('/', function (req, res) {
    (new Contact(req.body)).save(function (err, response) {
        if (err) {
            res.status(500).json({ message: 'Something Broke!' });
        } else {
            res.status(201).json(response);
        }
    });
});

router.put('/contacts/:id', function (req, res) {
    Contact.findByIdAndUpdate(req.params.id, req.body, function () {

    });
});

router.delete('/contacts/:id', function (req, res) {

});


module.exports = router;
