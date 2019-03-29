var express = require('express');
var router = express.Router();
var Lob = require('lob')('test_066ca30f3d0fe263d7b6a8af760a4983778');
/* Post a card */
router.post('/createPostcard', function(req, res, next) {
console.log('in the create postcard', req.body.pdf.filePath)
    Lob.postcards.create({
    description: 'Demo Postcard job',
    to: {
    name: 'Idalia',
    address_line1: '185 Berry St',
    address_line2: '# 6100',
    address_city: 'San Francisco',
    address_state: 'CA',
    address_zip: '94107'
  },
    // front: fs.createReadStream(req.body.pdf.filePath),
    // back: fs.createReadStream('/path/to/your/back.pdf')
    front: 'https://lob.com/postcardfront.pdf',
    back: 'https://lob.com/postcardback.pdf'
    }, function (err, res) {
    console.log(err, res);
    });

  res.send('respond with a resource');
});

module.exports = router;
