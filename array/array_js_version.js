const DEFAULT_CAPACITY = 10;

class CustomArray{

    constructor(
       capacity = DEFAULT_CAPACITY,
    ){
        this.capacity = capacity,
        this.array = new Array(capacity)
        this.length = 0
    };

    push(value){
        this.array[this.length] = value;
        this.length++;
    }
 
insert(value,index){

    // last item
    if(index === this.length){
       this.array[index] = value ;
      this.length++;
        return;
    }

    // Others

    for(let i = this.length; i > index; i--){

       this.array[i]= this.array[i - 1];
        
    }
    this.array[index] = value;
    this.length++;
}

remove(index){
    if(index < 0 || index > this.length){
        throw new Error("Index out of bound")
    }

// last item remove
if(index === (this.length - 1) ){
    this.array[index] = undefined;
    return;
}

// remove other items
for(let i = index; i < this.length; i++ ){
    this.array[i] = this.array[i+1];

    console.log(arr.array);
}
this.length--;
}
}



const arr = new CustomArray();
arr.push(10)
arr.push(20)
arr.push(30)
arr.push(40)
arr.push(50)
arr.push(60)
arr.insert(5,2);

console.log(arr.array);
arr.remove(2)

//console.log(arr.array);