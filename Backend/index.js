let express = require('express')
let connectToMongo = require('./db')
let cors = require('cors')

connectToMongo();

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/', (req, res)=>{
    res.send("Helloooo Irfan");
})

// Available Routes
app.use('/api/auth', require('./routes/auth'));
// app.use('/api/cart', require('./routes/cart'));

app.use('/api/cart', require('./routes/cart'))


app.listen(port, () => {
    console.log(`EverYthing.io backend listening at http://localhost:${port}`)
})