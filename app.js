const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

//all Routes
const blockPartRoutes = require('./routes/blockPartRoutes');
const blockRoutes = require('./routes/blockRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const communicationChannelRoutes = require('./routes/communicationChannelRoutes');
const containerRoutes = require('./routes/containerRoutes');
const customFeeRoutes = require('./routes/customFeeRoutes');
const driverRoutes = require('./routes/driverRoutes');
const quayRoutes = require('./routes/quayRoutes');
const quayTypeRoutes = require('./routes/quayTypeRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const roleRoutes = require('./routes/roleRoutes');
const shipOwnerRoutes = require('./routes/shipOwnerRoutes');
const shipRoutes = require('./routes/shipRoutes');
const storageAreaRoutes = require('./routes/storageAreaRoutes');
const truckRoutes = require('./routes/truckRoutes');
const userRoutes = require('./routes/userRoutes');



const globalErrHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const app = express();

// Allow Cross-Origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// Limit request from the same API 
const limiter = rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'Too Many Request from this IP, please try again in an hour'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({
    limit: '15kb'
}));

// Data sanitization against Nosql query injection
app.use(mongoSanitize());

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// Prevent parameter pollution
app.use(hpp());


// Routes
app.use('/api/v1/blockPart', blockPartRoutes);
app.use('/api/v1/block', blockRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/communicationChannel', communicationChannelRoutes);
app.use('/api/v1/container', containerRoutes);
app.use('/api/v1/customFee', customFeeRoutes);
app.use('/api/v1/driver', driverRoutes);
app.use('/api/v1/quay', quayRoutes);
app.use('/api/v1/quayType', quayTypeRoutes);
app.use('/api/v1/reservation', reservationRoutes);
app.use('/api/v1/role', roleRoutes);
app.use('/api/v1/shipOwner', shipOwnerRoutes);
app.use('/api/v1/ship', shipRoutes);
app.use('/api/v1/storageArea', storageAreaRoutes);
app.use('/api/v1/truck', truckRoutes);
app.use('/api/v1/user', userRoutes);


// handle undefined Routes
app.use('*', (req, res, next) => {
    const err = new AppError(404, 'fail', 'undefined route');
    next(err, req, res, next);
});

app.use(globalErrHandler);

module.exports = app;