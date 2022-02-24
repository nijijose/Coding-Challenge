const express = require('express');

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

app.post('/home/mailer',function(req,res){
   var mail = req.body.email;
   console.log(mail);
   // res.send(mail);

   let transporter = nodemailer.createTransport({
       service: 'outlook',
       auth: {
           user: 'annkevin34@outlook.com',
           pass: 'Qazbcd@123'
       }
   });

   let mailOptions = {
    from: 'annkevin34@outlook.com', 
    to: 'norahann587@gmail.com', 
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log(err);
        res.send("Something Went Wrong");
    }
    else{
        console.log("Mail Sent Successfully");
        res.send("Mail Sent Successfully");
    }
});

});

app.listen(4500);
