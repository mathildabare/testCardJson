/*
 *  Node Mailer  
 * ************ */

// https://www.w3schools.com/nodejs/nodejs_email.asp


/**** DOC NODEMAILER ***/

const nodemailer = require("nodemailer");






// Export password page


module.exports = {

  lostPassword: async (req, res) => {

    const user = await db.query(`SELECT FROM users WHERE mail = '${req.body.mail}'`)
    const host = req.get('host')
    const rand = Math.floor((Math.random() * 100) + 54)

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pausemanga.test@gmail.com',
        pass: '@hibarikyoya4927'
      }
    })

    req.session.visitor = {
      id: rand,
      userID: user[0].id
    }
    req.session.cookie.maxAge = 900000

    console.log('Visitor : ', req.session.visitor.userID)
    lostpassword
    link = "http://" + req.get('host') + "/resetpassword/" + req.session.visitor.id
    if (user.length > 0) {
      var mailOptions = {
        from: 'pausemanga.test@gmail.com',
        to: req.body.mail,
        subject: `'Vous avez demandé à réinitialiser votre mot de passe, ' + ${user[0].username}`,
        rand: req.session.visitor.id,
        html: `
          <p>click above the link to rest your password </p><br>
          <a href="${link}">Click here</a>`
      };

console.log('transporter');
      transporter.sendMail(mailOptions, (err, info, next) => {
        if (err) res.status(404)
        else {
          console.log(info)
          const mailSend = true
          res.render('home', {
            mailSend
          })
          next()
        }
      })
    }
  },



  lostpasswordPage: (req, res) => {
    console.log('Password')
    res.render('password')
  },


  resetpasswordPage: async (req, res) => {

    console.log(req.protocol + "://" + req.get('host'))
    console.log('Page resetPassword: ')

    // Ici on check notre protocole hébergeur (nodejs localhost) et le lien généré dans le mail
    if ((req.protocol + "://" + req.get('host')) == ("http://" + req.get('host'))) {
      console.log("Domain is matched. Information is from Authentic email")

      const userID = await db.query(`SELECT id FROM users WHERE id = '${req.params.id}'`)

      if (req.params.id == req.session.visitor.id) {
        res.render('resetpassword')

      } else {
        console.log("Mauvaise requête")
        res.redirect('/')
      }
    }
  },


  resetPassword: async (req, res) => {
    const {
      password,
      confirmPassword
    } = req.body
    const hash = bcrypt.hashSync(password, 10)

    console.log("controller reset password")
    console.log('mon hash : ', hash)

    if (password !== confirmPassword) {
      res.redirect('back')
    } else {

      const visitor = req.session.visitor.userID;
      console.log("visitor: ", visitor);
      await db.query(`UPDATE users SET password = '${hash}' WHERE id = ${visitor}`, function (err) {
        const changePassword = true
        const userID = req.params.id

        console.log('IDEUUUUH: ', req.session.visitor.userID)
        req.session.destroy(() => {
          res.clearCookie('math')
        })
        res.render('connect', {
          changePassword,
          userID
        })
      })
    }
  }
}