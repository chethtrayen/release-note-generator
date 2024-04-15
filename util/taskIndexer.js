const taskIdRegex = /TESI-(\d*).*/;

function taskIndexer(data) {
    const contentList = data.split("\n");
    const index = {};

    contentList.forEach(e => {
        const taskId = e.match(taskIdRegex)[1];

        if(index[taskId]){
            index[taskId].push(e);
        }else{
            index[taskId] = [e]
        }
        
    });

    return index
}

module.exports = taskIndexer;