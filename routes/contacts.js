/**
 * Created by mishrab on 7/15/15.
 */

var router = require('express').Router();
var uuid = require('uuid');

console.log(uuid.v4());

var contacts = [];

// this callback is executed for all get requests to /contacts
router.get('/', function (req, res) {
    res.status(200).json(contacts)
});

router.post('/', function (req, res) {
    req.body._id = uuid.v4();
    contacts.push(req.body);
    res.status(200).json({
        message: 'Successfully created contact ...'
    });
});

router.put('/contacts/:id', function (req, res) {
    console.log(req.params.id);
});


module.exports = router;
