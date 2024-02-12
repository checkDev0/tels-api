const prisma = require('../db')

const DoDelete = async () => {
  try {
    const resp = await prisma.data.deleteMany({})
    console.log(resp)
  } catch (error) {
    console.log(error)
  }
}

DoDelete()
