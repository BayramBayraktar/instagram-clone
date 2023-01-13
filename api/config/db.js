const mongoose = require('mongoose');


const ConnectDb = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log(`Mongodb connected ${connection.connection.host}`);


}


module.exports = ConnectDb
