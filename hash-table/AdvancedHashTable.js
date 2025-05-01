/*
For removing collision we can follow these 4 steps:

1. Take a big size Array. [ ArraySize = 53 ]
2. Resize The array. [Dynamic Array]
3. Better Hash Function. [ DJ2B Alogrithm:  hash = (hash * 33)]
4. Take a SinglyLinkedList for each index.

*/


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


    insert(key,value){
        const newNode = new Node(key,value);

        if(this.head === null){
            this.head = newNode;
            return;
        }

        // Collison hobar por value gula kun serial asbe eta bola nai
        // amra jani, linkedlist er suru te add korle O(1)
        // ar pore ba seshe add korel ,traverse korte hoy O(n)

        // jehetu bola nai tai amra prothomei add kore dibo
        newNode.next = this.head;
        this.head = newNode;
    }

    // Find value by key
    find(key) {
        let current = this.head;

        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }

        return null;
    }


    remove(key) {

        // Eta empty list handle er jonno.
        if (!this.head) return;

        // Jeta delete korte chai, jodi ta prothom node hoy.
        if (this.head.key === key) {
            this.head = this.head.next;
            return;
        }

        // prohtom chara, baki jekuno node er jonno.
        let current = this.head;
        while (current.next) {
            if (current.next.key === key) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    *entries(){
        let current = this.head;
        while(current){
            yield [current.key, current.value];
            current = current.next;
        }
    }
}

class HashTable{
    #keys;
    constructor(size = 53){
        this.size = size; // total storage capacity
        this.table = new Array(size); // storage
        this.count = 0; // actual element
        this.#keys = new Set(); // for keys,values,entries eigula pawar jonno

    }

    set(key, value) {
        const index = this.#hash(key); // Step 1: Find index using hash function
    
        if (!this.table[index]) { // Step 2: Check if LinkedList exists at that index
            this.table[index] = new LinkedList(); // Step 3: Create new LinkedList
        }
    
        const bucket = this.table[index];
        const existing = bucket.find(key); // Step 4: Check if key already exists
    
        if (!existing) {  // Only insert and update count and keys if key doesn't exist
            this.count++;            // new entry tai count barabo
            this.#keys.add(key);     // notun key tai set e add korbo
            bucket.insert(key, value);  // Insert new key-value pair
        }


        // Check load factor & resize
    if (this.count / this.size > 0.75) {
        this.#resize();
    }
    }
    

     // Better Hash Function
        #hash(key = ' '){
        let hash = 5381 // prime number seed
        for(let ch of key){
            hash = (hash * 33) ^ ch.charCodeAt(0); // X-OR Adding
        }

        // for ignoring negative index 
        // while we are doing X-OR operation for adding.
        return Math.abs(hash) % this.size; 
    }


    get(key) {
        const index = this.#hash(key); // step 1: hash kore index ber korlam
    
        const bucket = this.table[index]; // step 2: oi index er bucket/linked list nilam
    
        if (!bucket) return null; // jodi bucket-i na thake, mane ei index-e kichui nei
    
        return bucket.find(key); // step 3: linked list theke key match korle oi value pabo
    }


    remove(key) {
        const index = this.#hash(key); // step 1: hash kore index ber korlam
    
        const bucket = this.table[index]; // step 2: oi index er linked list ta nilam
    
        if (!bucket) return; // jodi bucket-i na thake, tahole kichu korar nai
    
        const existing = bucket.find(key); // step 3: key ta ase kina check korlam
    
        if (existing !== null) {
            bucket.remove(key);      // step 4: linked list theke node ta remove korlam
            this.count--;            // step 5: count komaye dilam
            this.#keys.delete(key);  // step 6: key set theke key ta delete korlam
        }
    }
    
    

   


    #resize() {
        const oldTable = this.table;            // 1️⃣ ager table ta rakhchi
        this.size = this.size * 2;              // 2️⃣ size double kore dicchi
        this.table = new Array(this.size);      // 3️⃣ notun array banacchi
        this.count = 0;                         // 4️⃣ count abar rebuild hobe
        this.#keys = new Set();                 // 5️⃣ keys set abar rebuild
    
        for (const bucket of oldTable) {        // 6️⃣ ager table er prottek bucket traverse
            if (bucket) {
                for (const [key, value] of bucket.entries()) {
                    this.set(key, value);       // 7️⃣ re-hash kore notun table a abar insert
                }
            }
        }
    }
    


   
}

const hash = new HashTable(2);
hash.set("name", "Minhaj");
hash.set("job", "Engineer");
hash.set("salary", "40k");
hash.set("phone", "0170000000");

console.log("Current size after insertions:", hash.size); // Expected size = 4
