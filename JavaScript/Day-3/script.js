//2d array
let arr = ["string", 2, true];
let arr1 = ["string",5,false,["hi",15,"solve"]];
console.log(2);
console.log(arr1[3][1]);

let arr2 =  ['a', 'b', 'c', 'd'];
console.log(arr2.join());
console.log(arr2.slice(1,2));
console.log(arr2.reverse());


let arr4 = 'hi , 24, true';
console.log(arr4.split(','));

let first = [1,2,4,5];
let second = [6,7,8,9];
let join = first.concat(second);

let join1 = [...first,...second];
console.log(join);
console.log(join1);



// if condetion
let pass = true;

if(pass==true)
{
    console.log("vada mapula");

}
else
{
    console.log("poda mapula");
}

//////

let age = 40;
let gender = 'male';

if(age>=40 && gender == 'female')
{
    console.log("yor are ready to go");
}

else 
{
    console.log("you are not ready to go ");
}

///////

let age1 = 40;
let gender1 = 'female';

if(age>=40 || gender == 'female')
{
    console.log("yor are ready to go");
}

else 
{
    console.log("you are not ready to go ");
}


// max value ifelse 

let a = 100;
let b = 200;

let max;

if(a>b) max=a;
else max=b;
console.log(max);


