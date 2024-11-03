{
    //oops - class

    // class Animal  {
    //     name: string;
    //     species: string;
    //     sound: string;

    //     constructor (name: string, species: string, sound: string) {
    //         this.name = name;
    //         this.species=species
    //         this.sound = sound;
    //     }

    //     makeSound() {
    //         console.log(`the ${this.name} makes ${this.sound} sound.`);
    //     }
    // }


    // better copy 
     class Animal  {
        
        constructor (public name: string, public species: string, public sound: string) {}

         //method
        makeSound() {
            console.log(`the ${this.name} makes ${this.sound} sound.`);
        }
    }

    const dog = new Animal('German Shephard', 'dog', 'barking')
    const cat = new Animal('Arabic', 'cat', 'Mew mew')

    // cat.makeSound();


    //  in js 
    // class Example  {
    //     constructor(id, name, age, address) { 
    //         this.id = id;
    //         this.name = name;
    //         this.age = age;
    //         this.address = address
    //     }
    // };
    // const example1 = new Example(222, 'Hasib', 23, 'Berlin')
    // console.log(example1);


    // in TS 

    class Person {
        constructor(public id:number, public name:string, public age: number, public address: string) { }
        
    }

    const person1 = new Person(222, 'Hasib', 23, 'Berlin')

    console.log(person1);


    
    //
}