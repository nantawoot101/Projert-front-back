const db = require('../models/db');

exports.listCart = async (req, res, next) => {
    try {
        const { userId } = req.query;
        
        if (!userId) {
            return res.status(400).json({ error: 'userId is required' });
        }

        const parsedUserId = parseInt(userId);
        if (isNaN(parsedUserId)) {
            return res.status(400).json({ error: 'Invalid userId' });
        }

        const cartItems = await db.cart.findMany({
            where: {
                userId: parsedUserId
            },
            include: {
                CartItem: {
                    include: {
                        book: true
                    }
                }
            }
        });
        
        return res.status(200).json({ cartItems });
    } catch (error) {
        console.error('Error getting cart items:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


exports.addToCart = async (req, res) => {
    try {
        const { userId, bookId, quantity } = req.body;

        if (!userId || !bookId || !quantity) {
            return res.status(404).json({ error: 'userId, bookId, and quantity are required' });
        }

        const parsedUserId = parseInt(userId);
        const parsedBookId = parseInt(bookId);
        const parsedQuantity = parseInt(quantity);

        if (isNaN(parsedUserId) || isNaN(parsedBookId) || isNaN(parsedQuantity) || parsedQuantity <= 0) {
            return res.status(404).json({ error: 'Invalid userId, bookId, or quantity' });
        }

        let cart = await db.cart.findUnique({
            where: {
                userId: parsedUserId
            }
        });

        if (!cart) {
            cart = await db.cart.create({
                data: {
                    userId: parsedUserId,
                    bookId: parsedBookId,
                    CartItem: {
                        create: {
                            bookId: parsedBookId,
                            quantity: parsedQuantity
                        }
                    }
                }
            });
        } else {
            const existingCartItem = await db.cartItem.findFirst({
                where: {
                    cartId: cart.id,
                    bookId: parsedBookId
                }
            });

            if (existingCartItem) {
                await db.cartItem.update({
                    where: {
                        id: existingCartItem.id
                    },
                    data: {
                        quantity: existingCartItem.quantity + parsedQuantity
                    }
                });
            } else {
                await db.cartItem.create({
                    data: {
                        cartId: cart.id,
                        bookId: parsedBookId,
                        quantity: parsedQuantity
                    }
                });
            }
        }

        return res.status(200).json({ message: 'Product added to cart successfully.' });
    } catch (error) {
        console.error('Error adding product to cart:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getCartItems = async (req, res) => {
    try {
        const { userId } = req.params;
        
        if (!userId) {
            return res.status(404).json({ error: 'userId is required' });
        }

        const parsedUserId = parseInt(userId);
        if (isNaN(parsedUserId)) {
            return res.status(404).json({ error: 'Invalid userId' });
        }

        const cartItems = await db.cart.findMany({
            where: {
                userId: parsedUserId
            },
            include: {
                CartItem: {
                    include: {
                        book: true
                    }
                }
            }
        });
        
        return res.status(200).json({ cartItems });
    } catch (error) {
        console.error('Error getting cart items:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


exports.updateCartItems = async (req, res) => {
    try {
        const { cartItemId } = req.params;
        const { quantity } = req.body;

        const parsedCartItemId = parseInt(cartItemId);
        const parsedQuantity = parseInt(quantity);

        if (isNaN(parsedCartItemId) || isNaN(parsedQuantity) || parsedQuantity < 0) {
            return res.status(404).json({ error: 'Invalid cartItemId or quantity' });
        }

        const cartItem = await db.cartItem.findUnique({
            where: {
                id: parsedCartItemId
            }
        });

        if (!cartItem) {
            return res.status(404).json({ error: 'Cart item not found' });
        }

        await db.cartItem.update({
            where: {
                id: parsedCartItemId
            },
            data: {
                quantity: parsedQuantity
            }
        });

        return res.status(200).json({ message: 'Cart item updated successfully' });
    } catch (error) {
        console.error('Error updating cart item:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteCartItem = async (req, res) => {
    try {
        const { cartItemId } = req.params;

        if (!cartItemId) {
            return res.status(404).json({ error: 'cartItemId is required' });
        }

        const parsedCartItemId = parseInt(cartItemId);

        if (isNaN(parsedCartItemId)) {
            return res.status(404).json({ error: 'Invalid cartItemId' });
        }

        await db.cartItem.delete({
            where: {
                id: parsedCartItemId
            },
        });
        return res.status(200).json({ message: 'Product removed from cart successfully.' });
    } catch (error) {
        console.error('Error deleting product from cart:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};