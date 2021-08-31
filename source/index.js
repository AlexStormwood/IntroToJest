function repeatMessage(message, repeatCount){
    // make sure message is a string
    if (typeof(message) != "string") {
        throw ("message is not a string")
    }

    // make sure repeatCount is a number
    // if (typeof(repeatCount) != "number"){
    if (isNaN(repeatCount)){
        throw("repeatCount is not a number")
    }


    // try{

    // }catch{

    // }



    let messageToShow = "";
    for (let index = 0; index < repeatCount; index++) {
        messageToShow += message; 
    }
    return messageToShow;
}

// console.log(repeatMessage("alex was here",3));
// console.log(repeatMessage("hello"));

module.exports = {
    repeatMessage
}