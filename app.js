const express = require('express');

require('dotenv').config();

const app = new express();
const nodemailer = require('nodemailer');

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.get('/',function(req,res){
    res.render('index',{
        title: 'Coding Challenge'
    });
});

app.get('/home',function(req,res){
    res.render('home',{
        title: 'Coding Challenge'
    });
});

app.post('/mailer',function(req,res){
   var mail = req.body.email;
   console.log(mail);
   // res.send(mail);

   let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

   let mailOptions = {
    from: 'norahann587@gmail.com', 
    to: 'nijijose378@gmail.com', 
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};

transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
      res.send("Something Went Wrong");
    } else {
      console.log("Email sent successfully");
      res.send("Mail Sent Successfully");
    }
  });

});

app.listen(process.env.PORT || 4500);
