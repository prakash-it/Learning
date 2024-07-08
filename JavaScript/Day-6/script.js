let arr = ["Leo,  Beast, Bigil "];

let arr2 = ["Mersal, Gilli, Pokkri"];

const add = [...arr,...arr2];

console.log(add)



for(let i=0; i<arr.length; i++)
{
   
    console.log(arr[i]);
}

for(let j=0; j<arr2.length;j++)
   {
    console.log(arr2[j]);
   }



///////
   let items = {
    name: "Mobile",
    quantity: 1, 
    price: 24000
   }

   for(let key in items)
   {
    console.log(key, items[key])
   }


//////
// let max

// let a= 10;
// let b=20;


///given the random value's
// const rand = Math.floor(Math.random()*10)
// console.log(rand);

// const rand1 = Math.random()*11
// console.log(rand1);

const button = document.getElementById("btn")

const textcolor = document.getElementById("color")

const wrap = document.getElementById("wrap")

const hax = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"]

button.addEventListener("click", function()
{
   let hexcolor = "#"

   for(let i=1; i<=6;i++)
   {
                                                   
   }
})
 





const videos = [

   "Pranking my sister, is she okay (gone wrong)",
   
   "how to javascript",
   
   "html tutorial",
   
   "learning the piano",
   
   "html basics",
   
   "css",
   
   "java",
   
   
   "programming",
   
   
   "ui/ux"
   
   ];

// const display = videos.forEach(function(video)
// {
//    return video
// })

// const display = videos.map(function(video)
// {
//    return video.toUpperCase()
// })


// const display = videos.find(function(video)
// {
//    return video.includes("u");
// })

const display = videos.filter(function(video)
{
   //return video.length <10

   return video.includes("html")
})


console.log(display)



const games = [
   { title: 'Mass Effect', rating: 9.5 },
 
   { title: 'League Of Legends', rating: 5 },
 
   { title: 'Last of Us', rating: 10 },
 
   { title: 'God of war', rating: 10 },
 
   { title: 'WWE 2k20', rating: 4 },
 ];

const HighRate = games.filter(function(game)
{
   return game.rating> 9
})

// const HighRate = games.some(function(game)
// {
//    return game.rating> 9
// })


console.log(HighRate)


const furit = ["Apple", "Orange", "Mango", "Banana"]

const number = [44,66,77,88,99,111,222]

const dis = furit.sort()

const dis1 = number.sort(function(a,b)
{
   return b-a
})

console.log(dis)

console.log(dis1)



let cost = [1,2,4,5,6,7,8,9,10]

let 