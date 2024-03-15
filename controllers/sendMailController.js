const { sendMail } = require('../helpers/sendMail')
const prisma = require('../db')

const send = async (req, res) => {
  const { email, password, userID } = req.body
  console.log(email, password, userID)
  if (!email || !password || !userID) {
    res.status(400).json({ error: 'email and password required' })
    return
  }

  const resp = await prisma.details.findUnique({
    where: {
      id: userID,
    },
  })
  console.log('user', resp)
  sendMail(email, password, resp['email'], res)
}

module.exports = send
