const prisma = require("../config/prisma")
const stripe = require('stripe')('sk_test_51QWIwnCmfSeI0tIAf1x8nrkzGBklDpjIhg6itK9ZbsgcggwoSEzXF7bc3cWOPAcMRYlaCLMjhQ1vWYqxYao9zREg00Su1bgMQR');

exports.payment = async (req, res) => {
    try {
        //req.user.id
        const cart = await prisma.cart.findFirst({
            where: {
                orderedById: req.user.id
            }
        })
        const amountTHB = cart.cartTotal * 100
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amountTHB,
            currency: "thb",
            automatic_payment_methods: {
                enabled: true,
            },
        })
        res.send({
            clientSecret: paymentIntent.client_secret
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
}