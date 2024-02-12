const prisma = require('../db')

const addData = async (req, res) => {
  const { userID, password } = req.body

  try {
    const newData = await prisma.data.create({ data: { userID, password } })
    console.log(newData)
    res.status(201).json({ success: true })
    return
  } catch (e) {
    console.error(e)
  }
}

const getData = async (req, res) => {
  try {
    const data = await await prisma.data.findMany({})
    console.log(data)
    console.log(data.reverse())
    res.status(200).json(data)
    return
  } catch (error) {
    console.log(error)
  }
}

module.exports = { addData, getData }
