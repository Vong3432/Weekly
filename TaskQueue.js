const redis = require("redis")

const TaskManager = async(redisClient) => {
    while(true) {
        let task;        

        try {
            task = await redisClient.blpopAsync("task_queue", 0);            
        } catch(error) {
            console.log('crashed')
            // Redis connect could have closed. Handle those cases here
            process.exit(1);
        }

        try {
            await HandleTask(task);
        } catch(error) {
            // Handling the task failed
            console.log("Handle task failed.")
        }

    }

}

const HandleTask = async(task) => {
    // Do the work
    console.log(task)
}

// Run the TaskManager function
const _RunTaskManager = async () => {    
    // Initialize redis
    let redisClient = redis.createClient();
    await TaskManager(redisClient);
}

module.exports = _RunTaskManager;