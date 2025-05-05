// class SimpleHashTable{

//     constructor(size = 10){
//         this.size = size;
//         this.array = new Array();
//     }



//     hash(keys){

//         let hash = 0;

//         for(let key of keys){
//         hash +=    key.charCodeAt(0)
//         }
//         return hash % this.size;
//     }


//     set(key,value){
//         const index = this.hash(key);
//         this.array[index] = value;
//     }

//     get(key){
//         const index = this. hash(key);
//        return this.array[index]
//     }

// }

// const simpleHash = new SimpleHashTable();
// simpleHash.set("name","Minhajul Islam");
// simpleHash.set("profession","Software Engineer.");

// console.log(simpleHash);
// console.log(`\n----------\n`)
// console.log(simpleHash.get('name'))

class Node{
    constructor(key,value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    // if there is nothing....
    insert(key,value){
        const newNode = new Node(key,value);

        if(!this.head){
            this.head = newNode;
            return;
        }else{
            // Jehetu kuthay add korte kichu bola nai tai simple rakhar jonno amra list er surutei add korbo.
            // ar jodi bola thakto tahole amra traverse kore index ways add kortam
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
    }

    find(key){
        let current = this.head;

        while(current){
            if(current.key === key){
                return current.value;
            }
            current = current.next;
        }
        return null;
    }

    update(key, value) {
        let current = this.head;
        while (current) {
            if (current.key === key) {
                current.value = value;
                return true; // found and updated
            }
            current = current.next;
        }
        return false; // not found
    }

    *entries(){
        let current = this.head;
        while(current){
            yield [current.key, current.value];
            current = current.next;
        }
    }


    toString(){
        let current = this.head;
        let result = "";
    
        while(current){
            result += `[${current.key}: ${current.value}] -> `;
            current = current.next;
        }
        
        return result || "Empty LinkedList";
    }
    
    
}

class AdvancedHashTable{
    constructor(size = 10){
        this.size = size;
        this.array = new Array(size);
        this.count = 0; // for actual element
        this.linked = new LinkedList()
    }

    betterHashFn(keys){
        let hash = 5381 // prime number seed
        for(let ch of keys){
            hash = (hash * 33) ^ ch.charCodeAt(0); // X-OR Adding
        }

        // for ignoring negative index 
        // while we are doing X-OR operation for adding.
        return Math.abs(hash) % this.size; 
    }

    resize(){
        const oldArray = this.array;
        this.size = this.size * 2;
        this.array = new Array();
        this.count = 0;

        for(let bucket of oldArray){
            if(bucket){
               for(let [key,value] of bucket.entries()){
                this.set(key,value);
               }
            }
        }
    }

    set(key,value){
        const index = this.betterHashFn(key);
        if(!this.array[index]){
            this.array[index] = new LinkedList();
    
        }

        const bucket = this.array[index];
        const isKeyExisting = bucket.find(key);

        if(!isKeyExisting){
            bucket.insert(key,value);
           this. count++;
        }else{
            bucket.update(key,value)
        }

// resize hash storage
if(this.count / this.size > 0.75){
    this.resize();
}
    }

    get(key){}

    toString() {
        let result = "";
    
        for (let i = 0; i < this.size; i++) {
            const bucket = this.array[i];
            if (bucket) {
                result += `Index ${i}: ${bucket.toString()}\n`; // ✅ now works
            }
        }
    
        return result || "HashTable is empty";
    }
    

}


const advanceHash = new AdvancedHashTable(2);
advanceHash.set("name","Minhajul Islam");
advanceHash.set("name1","jahidul Islam");

console.log(advanceHash.toString());
console.log("Current size after insertions:", advanceHash.size); 
