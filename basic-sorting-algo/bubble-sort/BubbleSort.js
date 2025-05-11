function bubbleSort(array){

    let swap = false;
    // Outer loop: for traverse array
    for(let i = 0; i<array.length; i++){

        // Inner loop: for compare adjacent
        for(let j =0; j<array.length - 1 - i; j++){
            if(array[j] > array[j+1]){
                // swap
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                swap = true;

            }
           
        }
        if(!swap){
            break;
        }

    }
    return swap;

}

const arr = [1,4,2,6,7,10,5];
let swap = bubbleSort(arr);

if(swap === false)

console.log(arr);