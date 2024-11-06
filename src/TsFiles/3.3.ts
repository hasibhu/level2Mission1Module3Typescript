

// type guard 

// typeof 
const add = (param1: string | number, param2: string | number): string | number => {
    
    if (typeof param1 === "number" && typeof param2 === "number") {
        
        return param1+param2
    } else {
        return param1.toString()+param2.toString()
    }
    
}


// console.log(add(3, 'hello'));
// console.log(add(3, 122));


// type in guard

type normalUser = {
    name: string;
}

type adminUser = {
    name: string;
    role: string
}


const getUser = (user: normalUser | adminUser) => {
    
    if ('role' in user) {
         console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
         console.log(`My name is ${user.name} and I have no role att all.`);
    }


}


const user: normalUser = {
    name: 'Hasib'
}

const userAdmin: adminUser = {
    name: 'Joya',
    role: 'Admin'
}



getUser(user);
getUser(userAdmin);