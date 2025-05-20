class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
    }

    append(data){
        const newNode =  new Node(data);

        if(this.head === null){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next){
            current = current.next;

        }
        current.next = newNode;
    }

    bubbleSort(){
        // check one element or no element
        if(!this.head || this.head.next){
            return;
        }
        let swapped;
        // We will use do-while loop, cuz linkedlist is not index based.
        do{
             swapped = false;
            let current = this.head;

            while(current.next){
                if(current.value > current.next.value){
                    [current.value, current.next.value] = [current.next.value, current.value];
                    swapped = true;
                }
                
                current.next;
            }

        }while(swapped)
    }

    printList(){
        let current = this.head;
        let result = "";
        while(current){
            result += `${current.data} ->`;
            current = current.next;
        }
        result += "null";

    console.log(result);
    
    }
}




const list = new LinkedList();
list.append(10);
list.append(40);
list.append(30);
list.append(20);

list.printList();

console.log('\n-------------\n');

list.bubbleSort();

list.printList();

