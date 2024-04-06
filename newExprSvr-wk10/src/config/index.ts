import dotenv from 'dotenv';


process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const envFound = dotenv.config();

if (envFound.error) {
    throw new Error('no .env file found');
}
export default {
    port: parseInt(process.env.PORT, 10), 
    //10 will make sure its parsed
    logs: {
        morgan: process.env.MORGAN
    }

}