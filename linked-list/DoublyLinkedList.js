class Node{

    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


    /*
    
        ✅ Doubly Linked List e head always ready thake,
        ✅ Doubly Linked List e tail always ready thake,
        tai kothao traverse kora lagbe na!
    
    */


    append(data) {
        const newNode = new Node(data);
        this.size++;
    
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            newNode.prev = null;
            newNode.next = null;
            return;
        }
    
        this.tail.next = newNode;    // Tail er next hobe newNode
        newNode.prev = this.tail;    // newNode er previous hobe old tail
        this.tail = newNode;         // newNode ke tail banabo
        newNode.next = null;         // Tail er next null hobe
    }


    prepend(data) {
        const newNode = new Node(data);
        this.size++;
    
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
    
        newNode.next = this.head;  // New node er next hobe puraton head
        this.head.prev = newNode;  // Old head er previous hobe new node
        this.head = newNode;       // Head ke update koro
    }


    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log("Index out of bounds");
            return;
        }
    
        // Insert at the beginning
        if (index === 0) {
            this.prepend(data);
            return;
        }
    
        // Insert at the end
        if (index === this.size) {
            this.append(data);
            return;
        }
    
        // Insert at any position in between
        const newNode = new Node(data);
    
        let current = this.head;
        let count = 0;
    
        while (count < index) {
            current = current.next;
            count++;
        }
    
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;
    
        this.size++;  // 👈 size++ insertion complete korar pore korte hobe
    }
    


    traverseForward() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next; // Next node e jao
        }
    }


    traverseBackward() {
        let current = this.tail;
        while (current !== null) {
            console.log(current.data);
            current = current.prev; // Previous node e jao
        }
    }
    
    
    toString(){
        let current = this.head;
        let result = "";

        while(current){
            result += `${current.data} -> `;
            current = current.next;
        }
        result += " ";
        return result;
    }

    

}


const doubly = new DoublyLinkedList();

doubly.append(10);
doubly.append(20);
doubly.append(30);
doubly.insertAt(100,1)
console.log(doubly.toString());