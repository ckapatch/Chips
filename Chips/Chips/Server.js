var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.use(function (err, req, res, next) {
    console.error(err);
    res.send(err);
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});
//# sourceMappingURL=Server.js.map