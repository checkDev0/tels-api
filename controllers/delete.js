const prisma = require('../db')

const DoDelete = async () => {
  try {
    const resp = await prisma.data.deleteMany({
      where: { userID: 'mixoyer916@goflipa.com' },
    })
    console.log(resp)
  } catch (error) {
    console.log(error)
  }
}

DoDelete()
