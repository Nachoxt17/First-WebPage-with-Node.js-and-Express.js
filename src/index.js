const express = require('express');
const app = express();
const path = require('path'); /**+-To Know More About "Path" go to https://nodejs.org/docs/latest/api/path.html#path_path .*/

// Settings:_
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Middlewares:_


// Routes:_
app.use(require('./routes/index.js'));

// Static Files:_
app.use(express.static(path.join(__dirname, 'public')));



// Listening the Server:_
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});