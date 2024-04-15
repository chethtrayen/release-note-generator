const fs = require("fs");

async function reader(file) {
   return new Promise((resolve, reject) =>  fs.readFile(file, "utf-8",(error, data) => {
        if(error) return reject(error); 
        return resolve(data.trim());
    }))
}

module.exports = reader;