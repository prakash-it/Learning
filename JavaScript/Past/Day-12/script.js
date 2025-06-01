//SYNC AND ASYNC

// console.log("HI");

// function sync()
// {
//     console.log("Hello");
//     console.log("To")
//     console.log("all");
// }

// sync()

// setTimeout(()=>console.log("Hell"), 1000)
// setTimeout(()=>console.log("is "),2000)
// setTimeout(()=>console.log("waiting"),4000)
// setTimeout(()=>console.log("for"), 5000)
// setTimeout(()=>console.log("you"), 6000)


// console.log("Bye");


//================================================================

// promise in js 

// let holiyday = new Promise((resolve, reject)=>
// {
//   let leaves = true

//   if(leaves)
//   {
//     resolve(4)
//   }
//   else
//   {
//     reject()
//   }
// })

// holiyday.then((day)=> console.log(`There is a holiday, you can go home for ${day}days`)).catch(()=>console.log(`There is a no holiday, you cannot go home`))


//promise useing function

// function holiday() {

//   return new Promise((resolve, reject)=>
//   {
//     let leaves = true
  
//     if(leaves)
//     {
//       resolve(4)
//     }
//     else
//     {
//       reject()
//     }
//   })
  
  

//   holiday().then((day)=> console.log(`There is a holiday, you can go home for ${day}days`))
//   .catch(()=>console.log(`There is a no holiday, you cannot go home`))
  
// }

// ===========TASK FOR PROMISE=================

// let num;
// num = Math.floor(Math.random()*2)
// console.log(num);
// let coin = new Promise((resolve,reject)=>
// {
    
//   if(num ==1)
//   {
//    resolve()

//   }

//   else
//   {
//     reject()
//   }
// })

// coin.then(()=> console.log(`you win`)).catch(()=>console.log(`You lose`))

//-------------------------------------------------------------------------------------------

let subjectA = new Promise((resolve, reject) => {
  let html =true

  if(html)
  {
    setTimeout(resolve, 4000,"HTML is over")
  }
  else
  {
    reject("HTML is not over")
  }
})


let subjectB = new Promise((resolve, reject) => {
  let CSS =true

  if (CSS)
  {
    setTimeout(resolve, 2000, "CSS is over")
  }
  else
  {
    reject("HTML is not over")
  }
})

let subjectC = new Promise((resolve, reject) => {
  let Bootstarp =false

  if(Bootstarp)
  {
    setTimeout(resolve, 1000,"Bootstarp is over")
  }
  else
  {
    reject("Bootstarp is not over")
  }
})

// Promise.all([subjectA,subjectB,subjectC]).then((message)=>console.log(message))
// .catch((message)=>console.log(message))

// Promise.allSettled([subjectA,subjectB,subjectC]).then((message)=>console.log(message))
// .catch((message)=>console.log(message))

// Promise.any([subjectA,subjectB,subjectC]).then((message)=>console.log(message))
// .catch((message)=>console.log(message))

Promise.race([subjectA,subjectB,subjectC]).then((message)=>console.log(message))
.catch((message)=>console.log(message))
