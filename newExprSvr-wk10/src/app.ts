import express from 'express';
import config from './config';

async function startServer() {
    const app = express()


app.listen(config.port, () => console.log(`server is runnging on port ${config.port}`))
.on('error', error => {
    console.log(error.message);
    process.exit(1);  // will stop the error quickly 
})
}

startServer(); 

