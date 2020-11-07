let canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d"), circle;

circle = new Path2D();
circle.arc(300,300,300,0,2 * Math.PI);

let R = 600 / 2;
for(let d = 0; d < 60; d++) {
    let angle = (d / 60) * (2 * Math.PI);
    let pX = Math.cos(angle) * R;
    let pY = -Math.sin(angle) * R;
    let qX = 0.9 * pX;
    let qY = 0.9 * pY;
    pX += R; pX += R;
    qX += R; qY += R;
function drawClockFace() {
    let line = new Path2D();
    let angle, pX, pY, qX, qY;
    let R = 300;
    
    for(let d = 0; d < 60; d++) {
        angle = (d / 60) * (2 * Math.PI);
        pX = Math.cos(angle) * R;
        pY = -Math.sin(angle) * R;
        qX = 0.9 * pX;
        qY = 0.9 * pY;
        pX += R; pX += R;
        qX += R; qY += R;
    
    circle.moveTo(qX,qY);
    circle.lineTo(pX-R,pY+R);
}
        line.moveTo(qX,qY);
        line.lineTo(pX-R,pY+R);
        
        context.stroke(line);
    
    };
};

function getTimeNow() {

    let date = new Date();
    

    let hours; 
    let minutes;
    let seconds;


    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    
    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}


function getAngles() {

    let timeNow = getTimeNow();
    
    let hoursAngle;
    let minutesAngle;
    let secondsAngle;

    secondsAngle = (timeNow.seconds / 60) * (2 * Math.PI);
    minutesAngle = (timeNow.minutes / 60) * (2 * Math.PI);
    hoursAngle = ((timeNow.hours % 12)/12) * (2 * Math.PI);
    
    secondsAngle = Math.PI / 2 - secondsAngle;
    minutesAngle = Math.PI / 2 - minutesAngle;
    hoursAngle = Math.PI / 2 - hoursAngle;
    
    return {
        secondsAngle: secondsAngle,
        minutesAngle: minutesAngle,
        hoursAngle: hoursAngle
    };
} 

function drawHoursHand(angle, R) {

    let pX;
    let pY;
    
    pX = Math.cos(angle) * 0.5 * R;
    pY = -Math.sin(angle) * 0.5 * R;
    pX += R; pY += R;
    
    let line = new Path2D();
    line.moveTo(R,R);
    line.lineTo(pX,pY);
   
    context.strokeStyle = "black";
    context.lineWidth = 9;
    context.stroke(line);
    context.strokeStyle = "black";
    context.lineWidth = 1;
    
}

function drawSecondsHand(angle, R) {

    let pX;
    let pY;
    
    pX = Math.cos(angle) * 0.5 * R;
    pY = -Math.sin(angle) * 0.5 * R;
    pX += R; pY += R;
    
    let line = new Path2D();
    line.moveTo(R,R);
    line.lineTo(pX,pY);
   
    context.strokeStyle = "black";
    context.lineWidth = 9;
    context.stroke(line);
    context.strokeStyle = "black";
    context.lineWidth = 1;
    
} 


function DrawWatch() {
    let R = 300;
    
    context.clearRect(0 ,0, R*2, R*2);
    let circle = new Path2D();
    circle.arc(R,R,R, 0 ,2*Math.PI);
    context.stroke(circle);
    
    let angles = getAngles();
    
    drawHoursHand(angles.hoursAngle, R);
    drawSecondsHand(angles.secondsAngle, R);
    drawClockFace();
    
    setTimeout(DrawWatch, 1000);
    
};

window.onload = function() {
    DrawWatch()
}