require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/error')
const authRoute = require('./routes/auth-route')
const userRoutes = require('./routes/user-route');
const bookRoutes = require('./routes/book-route');
const cartRoutes = require('./routes/cart-route');

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('upload'));

// service
app.use('/auth', authRoute)
app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/cart', cartRoutes);






// notFound
app.use( notFound )

// error
app.use(errorMiddleware)

let port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on Port :', port))