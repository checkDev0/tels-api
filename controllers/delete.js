const prisma = require('../db')

const DoDelete = async () => {
  try {
    const resp = await prisma.data.deleteMany({
      where: { userID: 'kamuro@wasiu.com' },
    })
    console.log(resp)
  } catch (error) {
    console.log(error)
  }
}

DoDelete()
