/*
 *  Node Mailer  
 * ************ */

// https://www.w3schools.com/nodejs/nodejs_email.asp


/**** DOC NODEMAILER ***/

const nodemailer = require("nodemailer");




mailer : async (req, res) => {
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pausemanga.test@gmail.com',
    pass: '@hibarikyoya4927'
  }
});

const user = await db.query(`SELECT * FROM users WHERE mail="mathildabare@gmail.com";`)
if (user) {
    rand = Math.floor((Math.random() * 100) + 54)
    host = req.get('host')
    link = "https://" + req.get('host') + "/newPW/" + rand
}

const mailOptions = {
  from: 'pausemanga.test@gmail.com',
  to: 'mathildabare@gmail.com',
  subject: 'new password',
  text: 'congratulations ! your new password here :  <a href=" ` + link + ` ">Click here to create password</a> '
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}


