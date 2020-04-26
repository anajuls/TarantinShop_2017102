
var app = express();

mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});