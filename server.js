const express = required('express');
const path = require ('path');
const app = express();
app.use(express.static(__dirname + '/dist/canna'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/canna/index.html'));
});
app.listen(process.env.PORT || 8080);