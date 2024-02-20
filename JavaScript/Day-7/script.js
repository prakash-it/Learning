//Global Executiion context

// plc() /// invoke before the function is called Hoisting 
// function plc() {
//     console.log("Welome")
    
// }

// console.log(inbox)
// const inbox =20

function pc()
{
    console.log(`Hello there ${names}`)
    changeName()

    console.log("Say Hi is Finished")
}

function changeName()
{
    namee = "Don"

    console.log(`We change the name to ${namee}`)

    console.log("changename is Finishd")
}

let names =  "Leader"

pc()

console.log("We are done with the code")

