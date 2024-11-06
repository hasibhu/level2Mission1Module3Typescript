 



//  instance of guard

class Animal {
    name: string;
    species: string;


    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }


    makeSound() {
        console.log('My sound is not defined');
    }
}


class Dog extends Animal{
    constructor(name:string, species:string) {
        super(name, species)
    }

    makeBark() {
        console.log(`I am barking `);
    }
}



class Cat extends Animal{

    constructor(name:string, species:string) {
        super(name, species)
    }


    makeMeaw() {
        console.log(`I am meawing.. `);
    }
}



const dog = new Dog('Shephard', 'Italiano')
const cat = new Cat('Leona', 'Russian')


dog.makeBark()
cat.makeMeaw()