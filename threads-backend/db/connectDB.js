const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected🎈`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1)
    }
}

module.exports = connectDb