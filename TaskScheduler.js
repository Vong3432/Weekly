const redis = require('redis');
const redisClient = redis.createClient();

const TaskScheduler = async (work) => {
    let task = await console.log("Save one task.")
    let taskID = "123";

    await redisClient.rpush("task_queue", taskID);
}

module.exports = TaskScheduler;