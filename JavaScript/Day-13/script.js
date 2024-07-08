//call back and call hell

// function loginUser(email, password, callback)
// {
//  setTimeout(()=>
//  {
//     callback({Usremail : email, Userpasswoed : password},2000)
//  })
// }

// function getUservedio(email, password, callback2)
// {
// setTimeout(()=>
// {
//     callback2(["video1", "video2","video4"])
// },4000)
// }

// const user = loginUser("plc@gmail.com",1516, Credential=>
// {
//     console.log(Credential);
//     console.table(Credential)

//     getUservedio(Credential.email, Credential.password, video =>
//         {
//             console.table(video)
//             console.log(video);
//         })
// })



//  ===============================================
// let subjectB = new Promise((resolve, reject) => {
//     let CSS =true
  
//     if (CSS)
//     {
//       setTimeout(resolve, 2000, "CSS is over")
//     }
//     else
//     {
//       reject("HTML is not over")
//     }
//   })
  
//Async Await
// async function fu()
// {
//     try
//     {
//         console.log("hi..");
//         res = await subjectB

//         console.log(res);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }

// fu()

//=================================================================

///JSON - javascript objact notation 

let button = document.querySelector("button")
let head = document.querySelector("h2")

button.addEventListener("click",function()
{
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data =>{
        head.innerText = data.slip.advice
con
    })

})