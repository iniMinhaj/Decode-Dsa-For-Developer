class Stack{
    constructor(maxSize = 5){
        this.maxSize = maxSize;
        this.array = new Array(maxSize);
        this.top = -1;
    }


    push(data){
        if(this.top >= this.maxSize -1){
   throw new    Error('Stack Overflow!')
  
        }else{
            this.array[++this.top] = data;
        }
    }

    pop(){
        if(this.top < 0){
            console.log('Stack is empty');
            
        }else{
          return  this.array[this.top --];
        }
    }

    peek(){
        return this.array[this.top];
    }

    isEmpty(){
        return this.top === -1;
    }

    isFull(){
        return this.top === this.maxSize -1;
    }
}


const stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
//stack.push(60)
//stack.push(70)
//stack.pop();
console.log(stack);
console.log(stack.isFull())