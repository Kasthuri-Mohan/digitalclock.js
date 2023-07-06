
function displayTime()
{
  const date=new Date();
  let hours= date.getHours();
  console.log(hours);
  let minutes=date.getMinutes();
  let seconds=date.getSeconds();
  let session="PM";

 if(hours>12)
{

  hours=hours-12;
  session="PM";
};

hours=hours>=10 ? hours: "0"+hours;
minutes=minutes>=10 ? minutes:"0"+minutes;
seconds=seconds>=10 ? seconds: "0"+seconds;


const time=`${hours}:${minutes}:${seconds}:${session}`;
document.getElementById("time").innerText=time;
  
}
setInterval(() => 
{
 displayTime();
},2000)//milisecon
//setInterval(displayTime,4000);
//setTimeout(displayTime,4000);


//ternary operator
//let a=1;
//let b=8;
//let c=a>b ? "a is big" : "a big";





