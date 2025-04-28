class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList{

    constructor(){
        this.head = null;
        this.size = 0;
    }

    prepend(data){
        const newNode = new Node(data);
        this.size++;
        if(this.head === null){
            this.head = newNode;
            newNode.next = this.head;
            
        }

        let current = this.head;
        while(current.next !== this.head){
            current = current.next;
        }
        current.next = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }

    append(data){
    const newNode = new Node(data);
    this.size++;
        if(this.head === null){
            this.head = newNode;
            newNode.next = this.head;
        }


        // Jehetu amra amader last node ta jani na, so amader traverse korte ber korte hobe
        // Last er kun node ta head k point kore ache

        let current = this.head;
        while(current.next !== this.head){
            current = current.next;
        }

        current.next = newNode;
       newNode.next = this.head;
    }

    insert(data,index){
        const newNode  = new Node(data);
        this.size++;

        if(index < 0 || index > this.size){
            console.log("Index out of bound")
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

        //  insert at any index
        let current = this.head;
        let prev = null;
        let count = 0;

        while(count < index){
            prev = current;
            current = current.next;
            count++;
        }

       prev.next = newNode;
        newNode.next = current;
        this.size++;

    }

    traverse(){

        if(this.head === null){
            throw new Error('Empty list')

        }

        let current = this.head;
        do{
            console.log(current.data)
            current = current.next;
        }while(current.next !== this.head)
    }

    remove(index){

        if(this.head === null){
            throw new Error('Empty list')

        }

        let current = this.head;
        let prev = null;
        let count = 0;

       while(count<index){
        prev = current;
        current = current.next;
        count++;
       }

       // skip the node that will be deleted.
       prev.next = current.next;
       this.size--;

    }

    toString(){
        let current = this.head;
        let result = "";

        while(current.next !== this.head){
            result += `${current.data} -> `;
            current = current.next;
        }
        result += " [ Back to head ]";
        return result;
    }

    
}


const circularList = new CircularLinkedList();
circularList.append(10);
circularList.append(20);
circularList.append(30);
circularList.append(40);
circularList.append(50);
circularList.prepend(5);
circularList.insert(100,3)
circularList.remove(3);

//console.log(circularList.head.data);
//circularList.traverse();
console.log(circularList.toString());