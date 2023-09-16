const express = require('express');
const router = express.Router()
const Cart = require("../models/cartList");
const { body, validationResult } = require('express-validator')
let cartCount = 0

router.post('/addtocart', [
    body('userPassword', "Password Authentication"),
    body('productName', "Enter Product Name").isLength({ min: 3 }),
    body("productPrice", "Enter Product Price").isNumeric(),
    body("currentCartCount", "Enter Current Cart Count").isNumeric()
], async (req, res) => {
    try {
        const { userPassword, productName, productPrice } = req.body;
        const errors = validationResult(req)
        if (!errors.isEmpty())
            res.status(400).json({ errors: errors.array() })

        const actioncart = await Cart.findOne({ productName: req.body.productName })

        if (actioncart) {
            res.send("Duplicacy Found")
        }

        else {
            const save_cart = await Cart.insertMany({
                userPassword: req.body.userPassword,
                productName: req.body.productName,
                productPrice: req.body.productPrice,
                currentCartCount: req.body.currentCartCount
            })

            await Cart.updateOne({
                currentCartCount: req.body.currentCartCount
            },
                {
                    $inc: {
                        counter: 1
                    }
                })

            // res.json(save_cart);
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal error occured")
    }
})

router.post('/getcart', [
    body('userPassword', "Password Authentication"),
], async (req, res) => {
    try {
        const get_carts = await Cart.find({ userPassword: req.body.userPassword })
        res.json(get_carts)

    } catch (error) {

        console.log(error.message)
        res.status(500).send("Internal error occured")

    }
})

router.delete('/deletecart', [
    body('productName', "Enter product name").isLength({ min: 3 })
], async (req, res) => {
    try {
        let actioncart = await Cart.findOne({ productName: req.body.productName })

        if (!actioncart) {
            res.status(400).json("No cart found");
        }

        actioncart = await Cart.findOneAndDelete({ productName: req.body.productName })

        await Cart.updateOne({
            currentCartCount: req.body.currentCartCount
        },
            {
                $inc: {
                    counter: -1
                }
            })

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal error occured")
    }
})


module.exports = router;