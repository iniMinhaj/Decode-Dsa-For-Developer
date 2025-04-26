
class Node{
constructor(data){
    this.data = data;
    this.next = null;
}
}



class SinglyLinkedList{
    constructor(){
        this.head = null
        this.size = 0;
    };

    push(data){
       return this.append(data);

        
    }


    prepend(data){
        const newNode = new Node(data);
        this.size++;

        if(this.head === null){
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
    }


    append(data){
        const newNode = new Node(data);
        this.size++;
    
        if(this.head === null){
            this.head = newNode;
            return;
        }
    
        let current = this.head;
    
        while(current.next){
            current = current.next;
        }
    
        current.next = newNode;  // ⬅️ MUST have this line
    }
    


    Insert(index, data){
        if(index < 0 || index > this.size){
            console.log("Invalid index");
            return;
        }
    
        if(index === 0){
            this.prepend(data);
            return;
        }
    
        if(index === this.size){
            this.append(data);
            return;
        }
    
        const newNode = new Node(data);
        let current = this.head;
        let previous = null;
        let count = 0;
    
        while(count < index){
            previous = current;
            current = current.next;
            count++;

           
        }
    
        previous.next = newNode;
        newNode.next = current;
        this.size++;
    }


    remove(index){

        if(index < 0 || index > this.size){
            throw new Error("Invalid index.")
            return;
        }

        let current = this.head;
        let prev = null;
        let count = 0;

        // if delete first node
        if(index === 0){
            this.head = current.next;
            size--;
            return;
        }

        

        while(count < index){
            prev = current;   
            current = current.next; 
            count++;
        }

        prev.next = current.next // Just skipped current node which supposed to be deleted.
        this.size--;

        
    }


    


    toString(){
        let current = this.head;
        let result = '';

        while(current){
            const showArrow = `${current.next === null ? " " : " -> "}`
            result += `${current.data} ${showArrow}`
            current = current.next
        }

        return result;
    }

    
}


const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.append(10)
singlyLinkedList.append(20)
singlyLinkedList.append(30)
singlyLinkedList.append(40)
singlyLinkedList.append(50)
singlyLinkedList.Insert(3,999)

console.log(singlyLinkedList.toString());
singlyLinkedList.remove(2);
console.log(singlyLinkedList.toString());
