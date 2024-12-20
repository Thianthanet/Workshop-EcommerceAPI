const prisma = require("../config/prisma")

exports.create = async (req, res) => {
    try {

        const { name } = req.body
        const catagory = await prisma.category.create({
            data: {
                name: name
            }
        })
        console.log(catagory)
        res.send(catagory)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
}

exports.list = async (req, res) => {
    try {
        const catagory = await prisma.category.findMany()
        res.send(catagory)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
}

exports.remove = async (req, res) => {
    try {
        const { id } = req.params
        const category = await prisma.category.delete({
            where: {
                id: Number(id)
            }
        })
        res.send(category)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
}