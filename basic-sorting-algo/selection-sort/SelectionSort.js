function SelectionSort(arr){

    const n = arr.length;

    for(let i = 0; i < n -1; i++){
        let minimumIndex = i;

        // check and find the minimumIndex
        for(let j = i + 1; j < n; j++){

            // check minimumIndex ta arr[j] er theke choto ki na
            // Jodi choto pawa then tahole minimumIndex = j diye update hoye jabe.
            if(arr[j] < arr[minimumIndex]){
                minimumIndex = j;
            }
        }

        // ekhane swapping ta hobe
        // ei point a eshe 1st phase i = 0; ekhon minimumIdex = 0 hole swap hobe na.
         // Jodi minimumIndex ta uporer loop a update hoye jai taile swap hobe. [ex: i = 0, minIndex = 3]

        if(minimumIndex !== i){
            [arr[i],arr[minimumIndex]] = [arr[minimumIndex], arr[i]];
        }
    }

    return arr;

}


const array = [2,4,1,5,3,8,6];

console.log(`Before sorting Array: `,array);
const sortedArray = SelectionSort(array);
console.log('\n----------------------------\n');
console.log(`After sorting Array: `,sortedArray);
