function countdownTimer(){
    //countdownTimer will go 50 to 0 by 5s
    console.log ("countdownTimer() started");
    var currtime = 50;
    document.getElementById("countDis").innerhtml = currtime + " sec"

    //45 sec display
    setTimeout(function(){
        currtime = currtime -5;
        console.log(currtime),
    document.getElementById("countDis").innerhtml = currtime + " sec" 
    }, 5000);

    //40 sec display
    setTimeout(function(){
        currtime = currtime -5;
        console.log(currtime),
    document.getElementById("countDis").innerhtml = currtime + " sec" 
    }, 10000);

    //35 sec display
    setTimeout(function(){
        currtime = currtime -5;
        console.log(currtime),
    document.getElementById("countDis").innerhtml = currtime + " sec" 
    }, 15000);
    //30 sec display
    setTimeout(function(){
        currtime = currtime -5;
        console.log(currtime),
    document.getElementById("countDis").innerhtml = currtime + " sec" 
    }, 20000);

    //25 sec display
    setTimeout(function(){
        currtime = currtime -5;
        console.log(currtime),
    document.getElementById("countDis").innerhtml = currtime + " sec" 
    }, 25000);

    //20 sec display
    setTimeout(function(){
        currtime = currtime -5;
        console.log(currtime),
    document.getElementById("countDis").innerhtml = currtime + " sec" 
    }, 30000);

    //15 sec display
    setTimeout(function(){
        currtime = currtime -5;
        console.log(currtime),
    document.getElementById("countDis").innerhtml = currtime + " sec" 
    }, 35000);

    //10 sec display
    setTimeout(function(){
        currtime = currtime -5;
        console.log(currtime),
    document.getElementById("countDis").innerhtml = currtime + " sec" 
    }, 40000);

    //5 sec display
    setTimeout(function(){
        currtime = currtime -5;
        console.log(currtime),
    document.getElementById("countDis").innerhtml = currtime + " sec" 
    }, 45000);

    //0 sec display
    setTimeout(function(){
        currtime = currtime -5;
        console.log(currtime),
    document.getElementById("countDis").innerhtml = currtime + " sec" 
    }, 50000);
}