// const person = {
//     name: {
//       first: 'Elyan',
//       last: 'Kemble',
//     },
//     age: 32,
//     location: {
//       city: 'Garland',
//       state: 'Texas',
//       zip: 75040
//     },
//     occupation: 'Front-End Developer',
//     introduce() {
//       console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
//     }
//   }
  
// //   function introduce() {
// //     console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
// //   }

// // person.introduce = introduce;

// person.introduce();



/* Classes */

// const cat1 {
//     eyes: 2,
//     legs: 4,
//     fur: "Orange",
//     isAwake: true,
//     isMoving: false,
//     sleep() {
//       this.isAwake = false;
//     },
//     wake() {
//       this.isAwake = true;
//     },
//     sit() {
//       this.isMoving = false;
//     },
//     walk() {
//       this.isMoving = true;
//     },
//     speak() {
//       console.log("Meow...");
//     }
//   }
  
//   const cat2 {
//     eyes: 2,
//     legs: 4,
//     fur: "Black and White",
//     isAwake: false,
//     isMoving: false,
//     sleep() {
//       this.isAwake = false;
//     },
//     wake() {
//       this.isAwake = true;
//     },
//     sit() {
//       this.isMoving = false;
//     },
//     walk() {
//       this.isMoving = true;
//     },
//     speak() {
//       console.log("Meow...");
//     }
//   }
  
//   const dog1 {
//     eyes: 2,
//     legs: 4,
//     fur: "Gold",
//     isAwake: true,
//     isMoving: true,
//     sleep() {
//       this.isAwake = false;
//     },
//     wake() {
//       this.isAwake = true;
//     },
//     sit() {
//       this.isMoving = false;
//     },
//     walk() {
//       this.isMoving = true;
//     },
//     speak() {
//       console.log("Woof!");
//     }
//   }
  
//   const cow1 {
//     eyes: 2,
//     legs: 4,
//     hair: "Brown",
//     isAwake: true,
//     isMoving: false,
//     sleep() {
//       this.isAwake = false;
//     },
//     wake() {
//       this.isAwake = true;
//     },
//     sit() {
//       this.isMoving = false;
//     },
//     walk() {
//       this.isMoving = true;
//     },
//     speak() {
//       console.log("Moo.");
//     }
//   }

  /* Creating a class to take those common traits and put them into a class called Animal */

//   class Animal {
//     // Code to define the class's properties and methods
//   }

class Animal {
	constructor(eyes, legs, isAwake, isMoving) {
		this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
	  // return is not needed because the new object is returned by default
	}
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }
  //if we wanted to override:
//   toString() {
//     return `This Animal has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
//   }
}

// const cat1 = new Animal(2, 4, true, false);
// const cat2 = new Animal(2, 4, false, false);
// const dog1 = new Animal(2, 4, true, true);
// const cow1 = new Animal(2, 4, true, false);
// 

const person = {
    name: {
      first: 'Elyan',
      last: 'Kemble',
    },
    age: 32,
    location: {
      city: 'Garland',
      state: 'Texas',
      zip: 75040
    },
    occupation: 'Front-End Developer'
  }
  
  function introduce() {
    console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
  }

class Human extends Animal {
    constructor(eyes, legs, isAwake, isMoving, name, age, occupation, location) {
        super(eyes, legs, isAwake, isMoving);
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.location = location;
    }
}

const Humanv2 = new Human (
    2,
    2,
    true, 
    true,
    "Elyan",
    32,
    "Front-End Developer",
    {
        city: "Garland",
        state: "Texas",
        zip: 75287,
    }
);

Humanv2.introduce();