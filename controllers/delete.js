const prisma = require('../db')

const DoDelete = async () => {
  try {
    const resp = await prisma.details.findUnique({
      where: {
        id: '842adcf9-5814-48cd-9e86-32ffd5f926c7',
      },
    })
    console.log(resp['email'])
  } catch (error) {
    console.log(error)
  }
}

DoDelete()
