const prisma = require('../db')
const baseURL = require('../helpers/data')

const genLink = async (req, res) => {
  const { email } = req.body
  if (!email) {
    res.status(400).json({ error: 'email required' })
    return
  }

  let user = await prisma.details.findUnique({ where: { email } })

  if (!user) user = await prisma.details.create({ data: { email } })

  console.log('email', email)
  console.log('user', user)

  const link = `${baseURL}${user.id}`
  console.log(link)
  res.status(200).json({ link })
}

module.exports = genLink
