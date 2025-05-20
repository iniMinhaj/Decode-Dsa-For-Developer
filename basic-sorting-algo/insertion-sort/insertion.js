function insertionSort(arr){
const n = arr.length;
    for(let i = 1; i<n; i++){
        let currentValue = arr[i];
        let leftSideIndex = i - 1; // imagine, this is sorted 

        while(leftSideIndex >= 0 && arr[leftSideIndex] > currentValue){

           // leftSide value k 1 ghor right shift korte hobe
           // [7,4] - leftSideValue = 7, currentValue = 4
           console.log('before shifting, ',leftSideIndex);

           arr[leftSideIndex + 1] = arr[leftSideIndex] // [7,7]
          console.log('after shifting, ',leftSideIndex);
          
           leftSideIndex --;
          // console.log(leftSideIndex);;
          console.log('after shifting finally, ',leftSideIndex);

          console.log(arr)

        }
        arr[leftSideIndex + 1] = currentValue;
    //    console.log(arr)

    }
    return arr;
}

const array = [29,3,2,5,8,6];
const ar = insertionSort(array);

console.log('Sorted Array = ',ar);

//console.log(insertionSort(array));
