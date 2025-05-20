function basicLinearSearch(arr, target){
    let n = arr.length;
    for(let i = 0; i<n; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

const array = [5,4,1,3,2]
const result  = basicLinearSearch(array,7);
if(result !== -1){
    console.log(result);
    
}else{
    console.log('No data found');
    
}
