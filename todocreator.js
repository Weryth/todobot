import fs from 'fs'

export const writerDataInJson = (chatID, taskID, task, taskDate, taskTime) =>{
    
    let taskJSON = {
        chatid: chatID,
        taskid: taskID,
        task: task,
        taskdate: taskDate,
        tasktime: taskTime
    };
    let data = JSON.stringify(taskJSON);
    fs.writeFileSync("./data/tododata.json", data)
}

//export { writer }