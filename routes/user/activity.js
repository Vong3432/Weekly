const router = require('express').Router();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')

// Middleware
const auth = require('../middleware/auth');

// Models
const Activity = require('../../models/user/Activity');

/* 
    @@METHOD: POST /activity/create
    @@DESC: Add new activity to mongoDB
    @@ACCESS: Private
*/
router.post('/create', auth, (req, res) => {

    const { currentYear, currentMonth, currentDay, dateString, title, desc, time, activity_id, email } = req.body;

    jwt.verify(req.token, process.env.JWT_SECRET, (err, authorized) => {

        if (err)
            return res.status(401).json({ msg: "Unauthorized." })

        const activity = new Activity({
            email,
            title,
            desc,
            time,
            activity_id,
            dateString,
            year: currentYear,
            month: currentMonth,
            day: currentDay
        });

        activity.save();

        return res.status(200).json(activity)

    })

    // console.log(req.body)
})

/* 
    @@METHOD: POST '/activity/local_to_cloud'
    @@DESC: Add local activity data to mongoDB
    @@ACCESS: Public
*/
router.post('/local_to_cloud', async (req, res) => {
    
    const { email, dateString, title, desc, time, activity_id, currentYear, currentMonth, currentDay } = req.body;

    // Activity.exists({activity_id})

    const activity = new Activity({
        email,
        title,
        desc,
        time,
        activity_id,
        dateString,
        year: currentYear,
        month: currentMonth,
        day: currentDay
    });

    activity.save();
    return res.status(200).json(activity);
})

/* 
    @@METHOD: GET /activity/displayAll
    @@DESC: Load all activities to mongoDB
    @@ACCESS: Private
*/
router.get('/displayAll/:email', auth, (req, res) => {

    const { email } = req.params

    jwt.verify(req.token, process.env.JWT_SECRET, (err, authorized) => {        

        if (err)
            return res.status(401).json({ msg: "Unauthorized." })

        Activity.find({ email }, (err, data) => {

            if (err)
                return res.status(400).json({ msg: "No activity is found." })

            return res.status(200).json(data)
        })

    })


})


/* 
    @@METHOD: DELETE /activity/delete/:id
    @@DESC: Delete activity from mongoDB
    @@ACCESS: Private
*/
router.delete('/delete/:id', auth, (req, res) => {

    const { id } = req.params

    jwt.verify(req.token, process.env.JWT_SECRET, (err, authorized) => {        

        if (err)
            return res.status(401).json({ msg: "Unauthorized." })

        Activity.deleteOne({activity_id: id}, (err) => {
            if(err)
                return res.status(400).json({ msg: "Something went wrong. Please try again."})
            
            return res.status(200).json(id);
        })

    })


})


/* 
    @@METHOD: PUT /activity/delete/:id
    @@DESC: Update activity from mongoDB
    @@ACCESS: Private
*/
router.put('/editActivity/:id', auth, (req, res) => {

    const { id } = req.params
    const { currentYear, currentMonth, currentDay, dateString, title, desc, time, activity_id, email } = req.body;
    
    jwt.verify(req.token, process.env.JWT_SECRET, async (err, authorized) => {        

        if (err)
            return res.status(401).json({ msg: "Unauthorized." })                    

        try {
            
            const newActivity = await Activity.findOneAndUpdate({activity_id: id}, {currentYear, currentMonth, currentDay, dateString, title, desc, time, activity_id, email}).exec();
            // console.log(newActivity)
            return res.status(200).json({currentYear, currentMonth, currentDay, dateString, title, desc, time, activity_id, email});

        } catch(err) {
            return res.status(400).json({ msg: "Something went wrong" })
        }

    })


})

module.exports = router;