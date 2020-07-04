const router = require('express').Router();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')

// Models
const User = require('../../models/user/User');

router.post('/login', (req, res) => {
    const { id, email, name, image } = req.body;

    if (!email)
        return res.status(400).json({ msg: "No email is detected." })

    const token = jwt.sign(email, process.env.JWT_SECRET)

    // Check the email from MongoDB
    User.findOne({ email }).then((user) => {

        if (!user) {
            const newUser = new User({ email, name, image, id })
            newUser.save();

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                secure: false,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASS
                },
                tls: {
                    rejectUnauthorized: false
                }
            })

            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: 'Weekly Notifications',
                text: 'Thanks for using Weekly',
                html: `
                    <div style="background: #514efd; padding: 2em; color: #fff;">
                        <h1 style="padding: 0; margin: 0; color: #fff;">Welcome to Weekly.</h1>
                        <p style="margin: 0; opacity: .75; padding-top: .5em; color: #fff;">Thanks for using Weekly! We will do our best to provide you the most effiency calendar functions as possible! :)</p>
                    </div>   
                `
            }

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);

                }
            });

            user = newUser
            
            return res.status(200).json({token, user: {id, email, image, name} });

        }

        return res.status(200).json({token, user: {id, email, image, name}});
    })

})

module.exports = router;