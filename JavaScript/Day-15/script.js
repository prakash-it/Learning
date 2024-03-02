
let ampm = document.getElementById("ampm")


function clock()
{
    let dateTime = new Date()

   let houres = dateTime.getHours()
   let min = dateTime.getMinutes()
   let sec = dateTime.getSeconds()

let period = (houres>=12?"pm ": "am")

houres =(houres>=12)?houres -12 : houres

houres = (houres == 0)? 12: houres

ampm.innerHTML = period

   document.getElementById("hours").innerHTML= zero(houres)
   document.getElementById("mins").innerHTML= zero(min)
   document.getElementById("seconds").innerHTML = zero(sec)

}

function zero(num)
{
    return num<10?"0"+num:num
}

setInterval(clock,500)

//=========================================================================

// Error handing or Excepion handling

// try
// {
// let num = prompt("Enter the number")

// if(num == "")
// {
//     throw "cannot be empty"
// }

// if(isNaN(num))
// {
//     throw "Enter the number"
// }
// }
// catch(err)
// {
//     console.log(err);
// }

// finally
// {
//     console.log("Thank you, bye");
// }

//======================================================

