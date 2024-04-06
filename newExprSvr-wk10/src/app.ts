import express from 'express';

async function startServer() {
    const app = express()


app.listen(4000, () => console.log(`server is runnging on port 4000`))
.on('error', error => {
    console.log(error.message);
    process.exit(1);  // will stop the error quickly 
})
}

startServer(); 

