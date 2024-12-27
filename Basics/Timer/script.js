const clock = document.getElementById('clock');
const stopwatch = document.getElementById('stopwatch');
setInterval(()=>{
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();

},1000);

let time = 10*60*1000;
setInterval(()=>{
    time = time - 1000;
    stopwatch.innerHTML = time/1000;
    
},1000)