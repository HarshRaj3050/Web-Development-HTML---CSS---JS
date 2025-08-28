// if internet speed is slow (lower then 5) then data is reject.

function dataBase(data) {
    let netSpeed = Math.ceil(Math.random() * 10);
    return new Promise((resolve, reject)=> {
        if(netSpeed >= 5) {
            resolve("Data was Saved!!")
        } else {
            reject("Connection is slow!!")
        }
    })
}

dataBase("Hello")
    .then(()=> {
        console.log("Data 1 was saved")
        return dataBase("World!!")
    })
    .then(()=> {
        console.log("Data 2 was saved")
        return dataBase("Harsh")
    })
    .then(()=>{
        console.log("Data 3 was saved")
    })
    .catch((err)=>{
        console.log(err, " Data was not saved")
    })