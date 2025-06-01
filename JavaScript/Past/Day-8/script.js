// let apple = {
//     funname : "varathiga",
//     qname : "Enga",

//     getlost()
//     {
//         console.log(this.funname + this.qname)

//     }
// }

// function getout(frd1, frd2)
// {
//     this.getlost()
//     console.log(`get out of my  class ${frd1} and getout out this college ${frd2} `)
// }

// let outstanding = getout.bind(apple)

// outstanding("Thanos", "Darkseid")      

//getout.apply(person,["Thanos", "Darkseid"])



//---------------------------------------------------------------

//OPP'S -(Constructor function)

// function Welcome(name, completed)
// {
//     this.name = name
//     this.completed = completed
// }          

// const todo =  new Welcome("to the college", false)
// const todo1 = new Welcome("Waste food", true)

// console.log(todo,todo1)



// function Welcome(name, completed, age , age2)
// {
//     this.name = name
//     this.completed = completed
//     this.age =age
//     this.age2 = age2
//     this.getWelcome = function()
//     {
//         console.log(this.age + this.age2)
//     }
// }          

// const todo =  new Welcome("to the college", false, 11, 11)
// const todo1 = new Welcome("Waste food", true ,12,12)

// console.log(todo,todo1)

// todo1.getWelcome()


//------------------
// ///prototype
// function Welcome(name, completed, age , age2)
// {
//     this.name = name
//     this.completed = completed
//     this.age =age
//     this.age2 = age2
//     Welcome.prototype.getWelcome = function()
//     {
//         console.log(this.age + this.age2)
//     }
// }          

// const todo =  new Welcome("to the college", false, 11, 11)
// const todo1 = new Welcome("Waste food", true ,12,12)

// console.log(todo,todo1)

// todo1.getWelcome()


//-----------------------
// //local storage 
// localStorage.setItem("Welcome", "Hell")
// localStorage.setItem("Comeback", "Agin")

// let get = localStorage.getItem("Welcome")
// let get1 = localStorage.getItem("Comeback")

// console.log(get, get1)



//--------------------------


