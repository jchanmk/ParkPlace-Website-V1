var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");
   // seedDB      = require("./seeds");

var indexRoutes = require("./routes/index") 

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname))
//seedDB();
console.log(__dirname);

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/login", function(req, res){
    res.render("loginFormMobile")
});

app.get("/signup", function(req, res){
    res.render("signupFormMobile")
});

app.get("/becomehost", function(req, res){
    res.render("becomeHostPage")
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Parq server has started");
}); 