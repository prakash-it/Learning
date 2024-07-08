//portotype Inheritans
// function Enemy(life, name, level)
// {
//     this.life = life
//     this.name = name
//     this.level = level
// }

// Enemy.prototype.getInfo = function()
// {
//     console.log(this.life, this.name, this.level);
// }

// Enemy.prototype.attack = function()
// {
//     console.log(`${this.name} has atteck power is ultliment`);
// }

// Enemy.prototype.defence = function()
// {
//     console.log(`${this.name} has very powerful defence`);
// }

// function Dragon(life, name, level, spell, color)
// {
//     Enemy.call(this, life,name, level )
// this.spell= spell
// this.color = color
// }

// Dragon.prototype = Object.create(Enemy.prototype)

// const newDragon = new Dragon(100, "Encop",150, "fire", "blue")

// console.log(newDragon);
// newDragon.attack()
// newDragon.defence()


//------------------------------------------------------------------------------------------------

//constructor classes
// class Enemy{
// constructor(life, name, level)
// {
//     this.life = life
//     this.name= name
//     this.level= level
// }
// getInfo()
// {
//     console.log(this.life, this.name, this.level);
// }
// }

// class Gamer extends Enemy
// {
//     constructor(life, name, level,joystick, playstation)
//     {
//         super(life,name,level)
//         this.joystick = joystick
//         this.playstation = playstation
//     }

//     getInfo()
//     {
//         console.log(this.life, this.name, this.level, this.joystick, this.playstation);
//     }
// }

// const Devil = new Gamer(200, "Thanos", 10000, "HP", "Ps-5")

// console.log(Devil);

//-------------------------------------------------------------------------------------

// Click animation 
class Animator{

    constructor(selector){
  
      this.selector = document.querySelector(selector)
    }
  
    fadeOut(time){
  
      if(this.selector.classList.contains("fadeOut-active")){
  
        this.selector.style.opacity = 1
        this.selector.classList.remove("fadeOut-active")
  
      }else {
  
        this.selector.style.opacity = 0
      this.selector.style.transition = `all ${time}s ease`
      this.selector.classList.add("fadeOut-active")
  
      }
      
  
    }
  
  
    move(time, {x=0, y=0}){
  
      if(this.selector.classList.contains("move-active")){
  
        this.selector.classList.remove("move-active")
  
        this.selector.style.transform = `translate(${0}px, ${0}px)`
  
      }else {
  
        this.selector.style.transition = `all ${time}s ease`
        this.selector.classList.add("move-active")
        this.selector.style.transform = `translate(${x}px, ${y}px)`
  
      }
  
    }
  
    color(time){
  
      if(this.selector.classList.contains("color-active")){
  
        this.selector.classList.remove("color-active")
        this.selector.style.color = "black"
        this.selector.style.fontSize = "20px"
  
  
      } else {
          
      this.selector.style.transition = `all ${time}s ease`
      this.selector.classList.add("color-active")
      this.selector.style.color = "red"
      this.selector.style.fontSize = "40px"
  
      }
  
    }
  }
  
  
  const intro = new Animator("h1")
  
  const para = new Animator("p")
  
  const btnAnim = new Animator("button")
  
  
  const button = document.querySelector("button")
  
  
  
  
  button.addEventListener("click", ()=>{
  
  
    intro.fadeOut(2)
    intro.move(1, {x:100, y:200})
    para.color(2)
    btnAnim.move(1, {x:500})
  
  })
