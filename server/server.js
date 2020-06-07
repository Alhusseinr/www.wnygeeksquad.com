const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes');
const app = express();
require('dotenv').config();

function serverStart(server) {
    const { PORT } = process.env;
    server.listen(PORT || 5000, () => {
        console.log(`Server is running on ${PORT}`)
    });
    process.on('unhandledRejection', (err, promise) => {
        console.log(`Error: ${err.message}`);
        server.close(() => process.exit(1));
    });
}

async function init() {
    app.use(bodyParser.json());
    app.use(cors());
    app.use();
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(morgan('tiny'));
    app.use(express.static(path.join(__dirname, "../build")));
    router(app);
    serverStart(app);
}

init();
