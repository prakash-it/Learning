function callback(name , age)
{
     console.log(`Welcome to ${name}`);
     console.log(`Age is ${age}`);
}

function HOF(callback)
{
    const name="Halan"
    const age=22
    callback(name,age)
}

HOF(callback)