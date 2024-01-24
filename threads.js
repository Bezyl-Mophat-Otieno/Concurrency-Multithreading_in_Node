const {Worker , isMainThread , parentPort , workerData} = require('worker_threads');


if(isMainThread){
    console.log('Hello from Main Thread');

    // Create a new worker thread
    let worker = new Worker(__filename)
    // listen for message from worker
    worker.on('message',(msg)=>{
        console.log('Message from worker :',msg);
    })
    // send message to worker
    worker.postMessage('Hello from main thread');

}else{

    console.log("Hello from worker thread");
    // listen for message from main thread
    parentPort.on('message',(msg)=>{
        console.log('Message from main thread :',msg);
    })

    // send message to main thread
    parentPort.postMessage('Hello from worker thread');

}