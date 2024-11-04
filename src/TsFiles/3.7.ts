

// static 

class Counter{

    //  count: number = 0
     static count: number = 0

    // increment() {
    //     return this.count+=1
    // }

     // after static 
    increment() {
        return Counter.count+=1
    }

    // decrement() {
    //     return this.count-=1
    // }

    // after static 
    decrement() {
        return Counter.count-=1
    }


}


const instance1 = new Counter();
console.log(instance1.increment());
console.log(instance1.increment());
console.log(instance1.increment());
console.log(instance1.increment());


const instance2 = new Counter();
console.log(instance2.decrement());