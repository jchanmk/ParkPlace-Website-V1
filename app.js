var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");
    nodemailer = require("nodemailer");
// seedDB      = require("./seeds");

var indexRoutes = require("./routes/index")

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname))
//seedDB();
console.log(__dirname);

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/login", function (req, res) {
    res.render("loginFormMobile")
});

app.get("/signup", function (req, res) {
    res.render("signupFormMobile")
});

app.get("/becomehost", function (req, res) {
    res.render("becomeHostPage")
});

app.get("/careers", function (req, res) {
    res.render("careers");
});

app.get("/howitworks", function (req, res) {
    res.render("howItWorks");
});

app.get("/legal", function (req, res) {
    res.render("legal");
});

app.get("/longterm", function (req, res) {
    res.render("longTermParkingForm");
});
app.get("/shortterm", function (req, res) {
    res.render("shortTermParkingForm");
});
app.get("/submitted", function (req, res) {
    res.render("parkingFormSubmission");
});

app.post("/sendshortterm", function (req, res) {
    // console.log(req.body);
    const output = `
    <p> Short Term Parking Submission </p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.shortTermName}</li>
        <li>Email: ${req.body.shortTermEmail}</li>
        <li>Location: ${req.body.shortTermLocation}</li>
    </ul>
`;
    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "parqinc41@gmail.com", // generated ethereal user
            pass: "@parkplace" // generated ethereal password
            // user: testAccount.user, // generated ethereal user
            // pass: testAccount
        }
    });

    // send mail with defined transport object
    let mailOptions = {
        from: 'parqinc41@gmail.com', // sender address
        to: "julianmkchan@gmail.com", // list of receivers
        subject: "Short Term Parking Submission", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    })


    res.redirect("/submitted");
});

app.post("/sendlongterm", function (req, res) {
    // console.log(req.body);
    const output = `
    <p> Long Term Parking Submission </p>
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${req.body.longTermName}</li>
        <li>Email: ${req.body.longTermEmail}</li>
        <li>Location: ${req.body.longTermLocation}</li>
    </ul>
`;
    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "parqinc41@gmail.com", // generated ethereal user
            pass: "@parkplace" // generated ethereal password
            // user: testAccount.user, // generated ethereal user
            // pass: testAccount
        }
    });

    // send mail with defined transport object
    let mailOptions = {
        from: 'parqinc41@gmail.com', // sender address
        to: "julianmkchan@gmail.com", // list of receivers
        subject: "Long Term Parking Submission", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    })


    res.redirect("/submitted");
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Parq server has started");
}); 