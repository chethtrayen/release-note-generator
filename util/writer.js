const fs = require("fs");

async function writer(file, data){
    return new Promise((resolve, reject) =>   fs.writeFile(file, data, (error, data) => {
        if(error) return reject(error); 
        return resolve(data);
    }))
}

module.exports = writer;