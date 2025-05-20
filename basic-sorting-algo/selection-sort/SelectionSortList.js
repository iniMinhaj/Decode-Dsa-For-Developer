class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
    }
    
    
    
    class LinkedList{
        constructor(){
            this.head = null
           
        };
    
        append(data){
            const newNode = new Node(data);
        
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


    selectionSort(){
            let current = this.head;

        while(current){
            let minNode = current;
            let nextNode = current.next;

            while(nextNode !== null){
                if(current.data > nextNode.data){
                    minNode = nextNode;
                }
                nextNode = nextNode.next;
            }

            if(minNode !== current){
                [minNode.data, current.data] = [current.data, minNode.data]
            }
            current = current.next;
        }

        return this.head;
        }
        
    }    

    const list = new LinkedList();
    list.append(30)
    list.append(20)
    list.append(40)
    list.append(60)

    console.log(JSON.stringify(list.selectionSort()));
    