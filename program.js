function createCounter(){
    let count=0;
    return {
        increment: function(){
            ++count;
        },
        getCount: function(){
            return count;
        } 
    }
}

let counter=createCounter();
counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());