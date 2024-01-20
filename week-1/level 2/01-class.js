//-----CLASS-------------

  // const dog = {
  //       name : 'Doggie' ,
  //     legs : '4',
  //     speaks : 'Bhow Bhow'
  // };
  // const cat = {
  //       name : 'Cat',
  //     legs : '4',
  //     speaks : 'Meow Meow'
  // };
  // const lion = {
  //       name : 'lion',
  //     legs : '4',
  //     speaks : 'Roar'
  // };

// for dog
console.log("Animal : " + dog["name"] +" "+ dog["legs"] + " " + dog["speaks"]); 
// for cat
 console.log("Animal : " + cat["name"] +" "+ cat["legs"] + " "+ cat["speaks"]); 
// for lionn
console.log("Animal : " + lion["name"] +" "+ lion["legs"] + " "+ lion["speaks"]); 

// Rather than printing them individually make a function

 function printAnimal(animal)
 {
     console.log("Animal : " + animal["name"] +" "+ animal["legs"] + " " + animal["speaks"]); 
 }
 printAnimal(cat);
 printAnimal(dog);
 printAnimal(lion);



// -------Lets see how class make things easy-------------------------

 class Animal {
       //Attribute
     constructor(name , legs , speaks) {
         this.name = name;
         this.legs = legs;
         this.speaks = speaks;
     }
     // function 
     speak()
     {
         console.log("Hi there , " + this.speaks);
     }
     describe()
     {
         console.log(this.name +" has " + this.legs +"legs");
         return `${this.name} has ${this.legs} legs`;
     }
 }

// //***** Now rather tha writing thi format
  // const cat = {
  //     name : 'Cat',
  //     legs : '4',
  //     speaks : 'Meow Meow'
  // };

// //***** Write this below format using class 
 let dog = new Animal("Dog" , 4 , "Bhow Bhow");
 let cat = new Animal("cat" , 4 , "Meow Meow");
 let lion = new Animal("Lion" , 4 , "Roar");
  console.log(dog);
  console.log(dog.name + " " + dog.legs + " " + dog.speaks);


 dog.speak();   // best h directly use kro
 // cat.speak();
 // lion.speak();
 console.log(dog.describe());

//----------FINAL CLASS & USE---------------

 class Animal {
     constructor(name, legCount) {
       this.name = name
       this.legCount = legCount
     }
     describe() {
       return `${this.name} has ${this.legCount} legs`
     }
   }

 let dog = new Animal("Dog" , 4 , "Bhow Bhow");
 console.log(dog.describe());


// -----------SATAIC in class --------------------
class Animal {
    constructor(name, legCount) {
      this.name = name
      this.legCount = legCount
    }
    describe() {
      return `${this.name} has ${this.legCount} legs`
    }
    static myType(){
        console.log("Im Associated with class , mujhe object se frk ni pdta , me rhuga hi")
    }
  }
Animal.myType(); // static me we
