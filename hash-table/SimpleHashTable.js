class SimpleHashTable{

    constructor(size){
        this.size = size;
        this.table = new Array(size);
    }


    #hash(key){
        let keyValue = 0;
        for(let i=0; i<key.length; i++){
            keyValue += key.charCodeAt(i) ;
        }

        return keyValue % this.size;
    }

    set(key, value){
        const index = this.#hash(key);
        this.table[index] = value;
    }

    get(key){
        const index = this.#hash(key);
        return this.table[index];
    }


    remove(key) {
		const index = this.#hash(key);
		this.table[index] = undefined;
	}



}

const simpleHash = new SimpleHashTable(10);
simpleHash.set('name',"Minhajul Islam");
simpleHash.set('age',"32");
simpleHash.set('profession',"Software Engineer.");
console.log(simpleHash.table);
console.log(`\n----------------\n`)

const name = simpleHash.get("name");
const profession = simpleHash.get("profession");

console.log(name);
console.log(profession);
console.log(`\n`)