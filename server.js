const express = require('express');
// const cron = require('node-cron')

const path = require('path')
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();

app.use(cors())
app.use(express.json());

if(process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

// Configuring Port
const port = process.env.PORT || 5000;

// Task queue manager
// const _RunTaskManager = require('./TaskQueue');
// _RunTaskManager()

// Schedule
// cron.schedule('*/5 * * * * *', () => {
//     console.log('running a task every 5 sec');
// })

/*
    Task
    =============
    1. Connect to mongoDB
    2. Implement authentication api
    3. Implement add/edit/delete activity api
        3.1 Add
            - Add item to mongoDB
            - scheduleJob with `node-schedule`

            # https://stackoverflow.com/questions/55215006/node-js-mail-scheduler
            Q: How to notify users?
            A: When adding job, the date/time will be put on scheduleJob function
               and start it in server.js
*/


// Connect to mongo
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false } ,(err) => {
    if(err)
        return console.log('Something went wrong')        
    
    console.log('MongoDB is connected.')
})

// routes
app.use('/user', require('./routes/user/user'));
app.use('/activity', require('./routes/user/activity'))

app.use(express.static('client/build'));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// Listen to port
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

