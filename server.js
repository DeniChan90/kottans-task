var express = require('express'),
    app = express();

app.use(express.static(__dirname));
app.listen(3000);
console.log('server running... \n port : 3000 \n IP : 192.168.0.103')
