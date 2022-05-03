import mongoose from "mongoose";
const myMongoConnection = async () => {
    try {
        //@ts-ignore
        await mongoose.connect(process.env.MONGO_URL_CONNECTION);
        console.log('Mongo database is online in port: ', mongoose.connection.port);

    } catch (error) {
        console.error(error);
        throw new Error('Error in db');
    }
}

export default myMongoConnection;
