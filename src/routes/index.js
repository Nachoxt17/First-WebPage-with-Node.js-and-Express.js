const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views/index.html')); /**+-To Know More About "res.sendFile(***);" go to https://expressjs.com/es/api.html#res.sendFile and To Know More About "__dirname"
    //     go to https://www.geeksforgeeks.org/difference-between-__dirname-and-in-node-js/#:~:text=The%20__dirname%20in%20a,It%20works%20similar%20to%20process.*/

    res.render('index.html');
});

router.get('/contact', (req, res) => {
    res.render('contact.html');
});


module.exports = router;

