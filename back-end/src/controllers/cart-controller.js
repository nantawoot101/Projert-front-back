const db = require("../models/db");

exports.addToCart = async (req, res, next) => {
    try {
        const userId = req.user.id; // Retrieve userId from req.user.id
        const bookId = parseInt(req.params.id); // Corrected to retrieve bookId from params
        const cart_quantity = parseInt(req.body.cart_quantity); // Corrected to retrieve quantity from body
        
        // Validate if bookId is a number
        if (isNaN(bookId)) {
            return res.status(400).json({ error: "Invalid ID" });
        }

        // Check if the book already exists in the cart
        const existingCartItem = await db.cart.findFirst({
            where: {
                userId: userId,
                bookId: bookId
            }
        });

        if (existingCartItem) {
            // If the book exists, update the quantity
            await db.cart.update({
                where: {
                    id: existingCartItem.id
                },
                data: {
                    cart_quantity: existingCartItem.cart_quantity + cart_quantity
                }
            });

            // Retrieve the updated cart item
            const updatedCartItem = await db.cart.findUnique({
                where: {
                    id: existingCartItem.id
                }
            });

            res.status(200).json(updatedCartItem);
        } else {
            // If the book does not exist, create a new cart item
            const cart = await db.cart.create({
                data: {
                    userId: userId, // Assign userId from req.user.id
                    bookId: bookId, // Assign bookId from req.params.id
                    cart_quantity: cart_quantity // Assign quantity from req.body.cart_quantity
                }
            });

            res.status(201).json(cart);
        }
    } catch (error) {
        next(error);
    }
}

exports.getCart = async (req, res, next) => {
    try {
        const userId = req.user.id; // ดึงค่า userId จาก req.user.id
        const cart = await db.cart.findMany({
            where: {
                userId: userId
            },
            include: {
                book: true
            }
        });
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
}

exports.updateCart = async (req, res, next) => {
    try {
        const cart = await db.cart.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                cart_quantity: parseInt(req.body.cart_quantity)
            }
        });
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
}

exports.deleteCart = async (req, res, next) => {
    try {
        const cart = await db.cart.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
}