/*
 * Controller: Node Mailer
 * ************************** */



/**** IMPORTS ****/

// Node Mailer
const nodemailer = require("nodemailer");

// BCRYPT
const bcrypt = require('bcrypt');
const saltRounds = 10;

/** PAGES **/

// Page Lost Password

/*
 * CRUD
 * **************************** */

// POST - Formulaire pour nouveau Password

module.exports = {

    // Page MDP Oublié
    lostpasswordPage: (req, res) => {
        console.log("Je suis la page de mot de passe oublié");
        res.render("lostpassword");
    },

    // POST - MDP Oublié
    lostPassword: async (req, res) => {
        console.log("Je suis le controller MDP oublié", req.body)

        const user = await db.query(`SELECT * FROM users WHERE mail="${req.body.mail}";`)
        if (user) {
            rand = Math.floor((Math.random() * 100) + 54)
            host = req.get('host')
            link = "http://" + req.get('host') + "/resetpassword/" + rand

            mailOptions = {
                from: 'pausemanga.test@gmail.com',
                to: req.body.mail,
                subject: 'reset password',
                text: 'Another step ...',
                html: `<h2>Another step</h2>,<br><h4>click on the link to rest your password</h4><br><a href=" ` + link + ` ">reset password</a>`
            };
        }
        console.log(mailOptions);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'pausemanga.test@gmail.com',
                pass: '@hibarikyoya4927'
            }
        });


        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })

        // Response
        res.render('home', { success: "Un email à bien été envoyer à " + req.body.mail })
    },

    // Page Reset MDP
    resetpasswordPage:(req, res) => {
        console.log("Je suis la page reset pw");
        res.render("resetpassword");
    },

    // POST - Reset Password
    resetpassword: (req, res) => {

        console.log('mes mailOptions', mailOptions.rand);

        if ((req.protocol + "://" + req.get('host')) === ("http://" + host)) {
            console.log("Domain is matched. Information is from Authentic email")

        if (req.params.id === mailOptions.rand) {
            console.log("mail is verified")

            res.render('resetpassword', {
                mailOptions
            })

        };
    }
}
}



// module.exports = {

//     lostpassword: async (req, res) => {

//         console.log("Je suis le controller MDP oublié", req.body)

//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//               user: 'pausemanga.test@gmail.com',
//               pass: '@hibarikyoya4927'
//             }
//           });

//         const user = await db.query(`SELECT * FROM users WHERE mail="${req.body.mail}";`)
//         if (user) {
//             // génération d'un chiffre random
//             rand = Math.floor((Math.random() * 100) + 54)
//             // on definit notre host
//             host = req.get('host')
//             // on définit le lien
//             link = "http://" + req.get('host') + "/lostpassword/" + rand
//             // et enfin notre mail
//             mailOptions = {
//                 from: 'pausemanga.test@gmail.com',
//                 to: req.body.mail,
//                 subject: "Mot de passe oublié",
//                 rand: rand,
//                 html: `
//           <h2>Encore un effort</h2><br>
//           <h4>Cliquer sur le lien suivant afin de finir la procédure de recréation de mot de passe.</h4><br>
//           <a href=" ` + link + ` ">Click here to create password</a>
//         `
//             };

//             // Et envoi notre mail avec nos callback
//             transporter.sendMail(mailOptions, (err, res, next) => {
//                 if (err) {
//                     console.log(err)
//                 } else {
//                     console.log("Message Envoyé")
//                     next()
//                 }
//             })

//             console.log('Données ', rand, link, mailOptions, host)
//             // Response
//             res.render('home', {
//                 success: "Un email à bien été envoyer à " + req.body.mail
//             })

//         } else
//             res.render('home')
//     },

//     resetpassword: (req, res) => {

//         console.log(req.protocol + "://" + req.get('host'))
//         console.log('Page Edit Password: ', rand, mailOptions, host)

//         // Ici on tcheck notre protocole hébergeur (nodejs localhost) et le liens générer dans le mail
//         if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
//             console.log("Domain is matched. Information is from Authentic email")

//             // Ici on tcheck notre id du mail avec la variable enregistrer en cache (rand)
//             if (req.params.id == mailOptions.rand) {
//                 console.log("email is verified")
//                 // res.end("<h1>Email " + mailOptions.to + " is been Successfully verified")
//                 res.render('editPassword', {
//                     mailOptions,
//                     rand
//                 })

//             } else {
//                 console.log("email is not verified")
//                 res.render('resetpassword', {
//                     message: "Bad Request !"
//                 })
//             }
//         } else {
//             res.render('resetpassword', {
//                 message: "Request is from unknown source !"
//             })
//         }
//     }
// };


































// // Réinitialisation de mot de passe
// exports.resetPassword = async (req, res) => {


//     const {
//         password,
//         confirmPassword
//     } = req.body

//     if (password === confirmPassword) {

//         const user = await db.query(`UPDATE users SET password = '${ password }' where '${req.params.id}'`)

//     }
//     console.log("Nouveau mot de passe : ", req.body);
//     res.render("resetpassword");
// }