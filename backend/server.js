const express = require('express')
const morgan = require('morgan')
var cookieParser = require('cookie-parser')

const app = express()
const db = require('./config/dbconnect');
const errorHandler = require('./middlewares/errorHandler');


db();

// Routes
const authRouter = require('./routes/authRouter');
const categoryRouter = require('./routes/categoryRouter');
const productRouter = require('./routes/productsRouter');
const couponRouter = require('./routes/couponRouter');




// middlewares
app.use(express.json());
//app.use(cookieParser);
app.use(morgan('tiny'));
app.use(errorHandler);
app.use(cookieParser());
//app.use(auth);

// Mount Routes
app.use(authRouter);
app.use(categoryRouter);
app.use(productRouter);
app.use(couponRouter);



const PORT = 3000
const server = app.listen(
    PORT,
    console.log(
      `Server running on port ${PORT}`
    )
);




