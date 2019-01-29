var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");
   // seedDB      = require("./seeds");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname))
//seedDB();
console.log(__dirname);

app.get("/", function(req, res){
    res.render("landing");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Parq server has started");
}); 